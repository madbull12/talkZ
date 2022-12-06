import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://yongchuan.stepzen.net/api/lunging-chinchilla/__graphql",
    headers:{
        'Content-Type': 'application/json',
        Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache(),
});

export default client;