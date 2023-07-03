interface FetchPostProps {
  url: string;
  method: FetchMethods;
  body?: object;
  headers?: object;
}

export type FetchMethods = 'POST' | 'GET';

export const post = async ({ url, method, body }: FetchPostProps) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/vnd.creditas.v1+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const status = response.ok;
    const content = await response.json();
    return { status, content };
  } catch (error) {
    console.log('Realizar tratativa.');
  }
};

export const get = async ({ url, method, headers }: FetchPostProps) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/vnd.creditas.v1+json',
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    const status = response.ok;
    const content = await response.json();
    return { status, content };
  } catch (error) {
    console.log('Realizar tratativa.');
  }
};
