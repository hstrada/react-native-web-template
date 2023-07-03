import { ButtonV2 as Button } from '@creditas/mobile-button';
import { useState } from 'react';
import { View } from 'react-native';
import { Input } from '../../components/Input';
import { post } from '../../helpers/useFetch';

const URL = 'https://stg-api.creditas.io/auth/oauth/token';

const Home = ({ navigation }) => {
  const [form, handleFormChange] = useState({
    username: '12514535204',
    password: 'mudar123',
    grant_type: 'password',
    scope: 'offline_access extended_duration legacy_access_token',
  });

  const handleNavigation = (status: boolean) => {
    if (status) navigation.navigate('Dashboard');
  };

  const handleLogin = (content) => {
    const { access_token } = content;
    localStorage.setItem('token', access_token);
  };

  const fetchLogin = async () => {
    const { status, content } = await post({
      url: URL,
      body: form,
      method: 'POST',
    });
    handleNavigation(status);
    handleLogin(content);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Input
        maxLength={40}
        onChangeText={(value) => handleFormChange({ ...form, username: value })}
        value={form.username}
        placeholder="cpf"
        placeholderTextColor="#ccc"
      />
      <Input
        maxLength={40}
        onChangeText={(value) => handleFormChange({ ...form, password: value })}
        value={form.password}
        placeholder="senha"
        placeholderTextColor="#ccc"
      />
      <Button
        testID=""
        text="Login"
        variant="primary"
        size="small"
        scale="fixed"
        onPress={fetchLogin}
      />
    </View>
  );
};

export default Home;
