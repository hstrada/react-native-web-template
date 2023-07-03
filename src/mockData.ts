/* eslint-disable max-lines */
export const mockData = {
  type: 'MainScreen',
  theme: 'default',
  backgroundColor: '#EDF0EF',
  children: [
    {
      type: 'Styled',
      componentRef: {
        type: 'GridV2',
        children: [
          {
            type: 'Icon',
            name: 'CreditasLogo',
            width: '32px',
          },
        ],
        theme: 'default',
        tracking: {
          id: 'TopBar',
          parameters: {
            id: 'TopBar',
            product: 'TopBar',
            component: 'TopBar',
          },
        },
      },
      css: {
        marginTop: '32px',
        marginBottom: '28px',
        marginLeft: '40px',
      },
      tracking: {
        id: 'TopBar',
        parameters: {
          id: 'TopBar',
          product: 'TopBar',
          component: 'TopBar',
        },
      },
    },
    {
      type: 'Styled',
      componentRef: {
        type: 'GridV2',
        children: [
          {
            type: 'Styled',
            componentRef: {
              type: 'GridV2',
              children: [
                {
                  type: 'TextTypography',
                  fontType: 'bodyS',
                  fontWeight: 'regular',
                  color: '#6f7974',
                  children: [
                    {
                      type: 'Text',
                      value: 'Oi, Jordi!',
                    },
                  ],
                  align: 'left',
                  textDecoration: 'none',
                  numberOfLines: 1,
                },
              ],
              theme: 'default',
            },
            css: {
              paddingBottom: '8px',
            },
          },
          {
            type: 'Styled',
            componentRef: {
              type: 'GridV2',
              children: [
                {
                  type: 'TextTypography',
                  fontType: 'headingM',
                  fontWeight: 'regular',
                  color: '#1f2d27',
                  children: [
                    {
                      type: 'Text',
                      value: 'Muito bom ter\nvocê por aqui!',
                    },
                  ],
                  align: 'left',
                  textDecoration: 'none',
                  numberOfLines: 4,
                },
              ],
              theme: 'default',
            },
            css: {
              paddingBottom: '32px',
              paddingRight: '40px',
              paddingLeft: 'auto',
            },
          },
          {
            type: 'Styled',
            componentRef: {
              type: 'GridV2',
              theme: 'default',
            },
            css: {
              flexDirection: 'row',
            },
          },
        ],
        theme: 'default',
        tracking: {
          id: 'DefaultSpotlight',
          parameters: {
            id: 'DefaultSpotlight',
            product: 'DefaultSpotlight',
            component: 'Spotlight',
          },
        },
      },
      css: {
        paddingLeft: '24px',
        justifyContent: 'center',
        marginLeft: '16px',
        marginRight: '16px',
        marginBottom: '2px',
        marginTop: '20px',
      },
      tracking: {
        id: 'DefaultSpotlight',
        parameters: {
          id: 'DefaultSpotlight',
          product: 'DefaultSpotlight',
          component: 'Spotlight',
        },
      },
    },
    {
      type: 'ScaleTouchable',
      onPress: {
        type: 'Redirect',
        to: {
          type: 'WebView',
          url: 'https://stg-api.creditas.io/mobile-web-chat',
          headerTitle: 'Ajuda da Creditas',
        },
      },
      children: [
        {
          type: 'Styled',
          componentRef: {
            type: 'GridV2',
            children: [
              {
                type: 'Styled',
                componentRef: {
                  type: 'GridV2',
                  children: [
                    {
                      type: 'ImagePlaceholder',
                      source: {
                        uri: 'https://assets.creditas.com/dashboard-assets/images/1.2.0/flyer-rescindidos.png',
                      },
                      imageHeight: '100%',
                      imageWidth: '100%',
                      placeholderColor: '#a5aea7',
                      placeholderHeight: '100%',
                      placeholderWidth: '100%',
                    },
                  ],
                  theme: 'default',
                },
                css: {
                  aspectRatio: '0.939',
                  borderRadius: '20px',
                  overflow: 'hidden',
                },
              },
            ],
            theme: 'default',
          },
          css: {
            margin: '36px 20px 24px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
          },
        },
      ],
      tracking: {
        id: 'Rescindidos',
        parameters: {
          id: 'Rescindidos',
          product: 'Rescindidos',
          component: 'Flyer',
        },
      },
    },
    {
      type: 'ScaleTouchable',
      onPress: {
        type: 'Redirect',
        to: {
          type: 'InternalRoute',
          name: 'Atwork',
          screen: 'payroll_termination_faq',
        },
      },
      children: [
        {
          type: 'Styled',
          componentRef: {
            type: 'GridV2',
            children: [
              {
                type: 'Styled',
                componentRef: {
                  type: 'GridV2',
                  children: [
                    {
                      type: 'ImagePlaceholder',
                      source: {
                        uri: 'https://assets.creditas.com/dashboard-assets/images/1.3.0/termination/landing-page.png',
                      },
                      imageHeight: '100%',
                      imageWidth: '100%',
                      placeholderColor: '#a5aea7',
                      placeholderHeight: '100%',
                      placeholderWidth: '100%',
                    },
                  ],
                  theme: 'default',
                },
                css: {
                  aspectRatio: '0.940',
                  borderRadius: '20px',
                  overflow: 'hidden',
                },
              },
            ],
            theme: 'default',
          },
          css: {
            margin: '14px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
          },
        },
      ],
      tracking: {
        id: 'LandingPageTerminationOfferWidget',
        parameters: {
          id: 'LandingPageTerminationOfferWidget',
          product: 'LandingPageTerminationOfferWidget',
          component: 'Flyer',
        },
      },
    },
    {
      type: 'ScaleTouchable',
      onPress: {
        type: 'Redirect',
        to: {
          type: 'WebView',
          url: 'https://www.creditas.com/programa-de-bem-estar-financeiro-app',
          headerTitle: 'Bem-estar Financeiro',
        },
      },
      children: [
        {
          type: 'Styled',
          componentRef: {
            type: 'GridV2',
            children: [
              {
                type: 'Styled',
                componentRef: {
                  type: 'GridV2',
                  children: [
                    {
                      type: 'ImagePlaceholder',
                      source: {
                        uri: 'https://assets.creditas.com/dashboard-assets/images/1.3.0/termination/edufin.png',
                      },
                      imageHeight: '100%',
                      imageWidth: '100%',
                      placeholderColor: '#a5aea7',
                      placeholderHeight: '100%',
                      placeholderWidth: '100%',
                    },
                  ],
                  theme: 'default',
                },
                css: {
                  aspectRatio: '1.000',
                  borderRadius: '20px',
                  overflow: 'hidden',
                },
              },
            ],
            theme: 'default',
          },
          css: {
            margin: '14px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
          },
        },
      ],
      tracking: {
        id: 'EduFinTerminationOfferWidget',
        parameters: {
          id: 'EduFinTerminationOfferWidget',
          product: 'EduFinTerminationOfferWidget',
          component: 'Flyer',
        },
      },
    },
    {
      type: 'ScaleTouchable',
      onPress: {
        type: 'Redirect',
        to: {
          type: 'InternalRoute',
          name: 'Origination',
        },
      },
      children: [
        {
          type: 'Styled',
          componentRef: {
            type: 'GridV2',
            children: [
              {
                type: 'Styled',
                componentRef: {
                  type: 'GridV2',
                  children: [
                    {
                      type: 'ImagePlaceholder',
                      source: {
                        uri: 'https://assets.creditas.com/dashboard-assets/images/1.3.0/termination/auto.png',
                      },
                      imageHeight: '100%',
                      imageWidth: '100%',
                      placeholderColor: '#a5aea7',
                      placeholderHeight: '100%',
                      placeholderWidth: '100%',
                    },
                  ],
                  theme: 'default',
                },
                css: {
                  aspectRatio: '1.000',
                  borderRadius: '20px',
                  overflow: 'hidden',
                },
              },
            ],
            theme: 'default',
          },
          css: {
            margin: '14px 20px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
          },
        },
      ],
      tracking: {
        id: 'AutoTerminationOfferWidget',
        parameters: {
          id: 'AutoTerminationOfferWidget',
          product: 'AutoTerminationOfferWidget',
          component: 'Flyer',
        },
      },
    },
  ],
  metadata: {
    hasAutoFin: 'false',
    hasMotoFin: 'false',
    hasAutoRefi: 'false',
    hasAutoRefiTopUp: 'false',
    hasAtWork: 'true',
    hasHome: 'false',
    hasInsurance: 'false',
    hasBenefits: 'false',
    hasCreditCard: 'false',
    measureStoreImpactWith: 'average',
  },
};
