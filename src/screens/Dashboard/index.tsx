import { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  ScrollView,
  SectionList,
  View,
  Text,
} from 'react-native';

import StyleguideInterpreter from '@creditas/mobile-styleguide-interpreter';
import { ThemeContainer } from '@creditas/mobile-stylitas';
import { Checkbox } from '@creditas/mobile-checkbox';

import { Input } from '../../components/Input';
import { MainScreen } from '../../components/MainScreen';
import { ContentContainer, InputContainer, Label, Separator } from './styles';

import { mockData } from './mockData';
import { get } from '../../helpers/useFetch';

const Content = ({ loading, errorMessage, data, showAnalytics }) => {
  const trackEvent = (event, params) => {
    console.log('eventName', event);
    console.log('params', params);
  };
  const navigate = (route, params) => {
    console.log('routeName', route);
    console.log('params', params);
  };
  const logException = (error, params) => {
    console.log('errorName', error);
    console.log('params', params);
  };

  useEffect(() => {
    const response = get({
      url: 'http://localhost:8000/v3/dashboard',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'App-Version': '8.130.0',
        Country: 'BR',
        'Device-Width': '390',
        'Device-Height': '667',
        'Device-Platform': 'IOS',
        'X-User-Id': '123',
        'X-User-Type': 'custumer',
        'X-Auth-User': '123',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    console.log(response);
  }, []);

  const formatSections = (children) =>
    children.map((item) => ({
      data: [[{ ...item }]],
    }));

  const renderItem = ({ item, section }) => {
    return (
      <View>
        <StyleguideInterpreter
          jsonTree={item[0]}
          analyticsEvents={{ trackEvent }}
          loggingEvents={{ logException }}
          navigation={{ navigate }}
        />
        {showAnalytics && (
          <>
            {' '}
            <Text
              style={{
                alignSelf: 'center',
              }}>
              {JSON.stringify(section.data[0][0].tracking.parameters, null, 2)}
            </Text>
            <Separator />
          </>
        )}
      </View>
    );
  };

  return (
    <MainScreen
      loading={loading}
      error={errorMessage}
      backgroundColor={data?.backgroundColor}
      loadingElement={<></>}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ThemeContainer>
          <SectionList
            sections={formatSections(data.children)}
            renderItem={renderItem}
          />
        </ThemeContainer>
      )}
    </MainScreen>
  );
};

const Dashboard = () => {
  const [loading] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const [data] = useState(mockData);
  const [errorMessage] = useState(null);
  const [form, handleFormChange] = useState({
    width: '375',
    height: '667',
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Checkbox
        text="Mostrar analytics"
        onPress={() => setShowAnalytics((prevAnalytics) => !prevAnalytics)}
        checked={showAnalytics}
      />
      <InputContainer>
        <InputContainer>
          <Label>Width: </Label>
          <Input
            maxLength={4}
            onChangeText={(value) =>
              handleFormChange({ ...form, width: value })
            }
            value={form.width}
            placeholderTextColor="#ccc"
          />
        </InputContainer>
        <InputContainer>
          <Label>Height: </Label>
          <Input
            maxLength={4}
            onChangeText={(value) =>
              handleFormChange({ ...form, height: value })
            }
            value={form.height}
            placeholderTextColor="#ccc"
          />
        </InputContainer>
      </InputContainer>
      <ContentContainer width={form.width} height={form.height}>
        <View
          style={{
            width: Number(form.width),
            height: Number(form.height),
          }}>
          <Content
            loading={loading}
            errorMessage={errorMessage}
            data={data}
            showAnalytics={showAnalytics}
          />
        </View>
      </ContentContainer>
    </ScrollView>
  );
};

export default Dashboard;
