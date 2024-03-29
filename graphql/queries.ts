import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getTalkZ_postList {
      talkZ_subtalkz {
        topic
      }
      body
      created_at
      id
      subtalkz_id
      media

      title
      username
      talkZ_user {
        email
        id
        image
        name
      }
      talkz_commentList {
        username
        text
        post_id
        id
        created_at
        talkZ_user {
          image
          id
          name
        }
      }
      talkz_voteList {
        upvote
        username
        id
        post_id
      }
    }
  }
`;
export const GET_USER_POSTS = gql`
  query MyQuery($id: ID!) {
    getTalkZ_postListByUserId(id:$id) {
      talkZ_subtalkz {
        topic
      }
      body
      created_at
      id
      subtalkz_id
      media

      title
      username
      talkZ_user {
        email
        id
        image
        name
      }
      talkz_commentList {
        username
        text
        post_id
        id
        created_at
        talkZ_user {
          image
          id
          name
        }
      }
      talkz_voteList {
        upvote
        username
        id
        post_id
      }
    }
  }
`;

export const GET_SUBTALKZ_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getTalkz_subtalkzListbyTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query MyQuery($email: String!) {
    getTalkz_userByEmail(email: $email) {
      name
      email
      image
      id
    }
  }
`;

export const GET_ALL_SUBTALKZ = gql`
  query MyQuery {
    getTalkZ_subtalkzList {
      topic
    }
  }
  
`

export const GET_POST_BY_ID = gql`
  query MyQuery($id: ID!) {
    getTalkZ_post(id: $id) {
      talkZ_subtalkz {
        topic
      }
      body
      created_at
      id
      subtalkz_id
      media
      talkz_commentList {
        username
        text
        post_id
        id
        created_at
        talkZ_user {
          image
          id
          name
        }
      }
      talkz_voteList {
        upvote
        username
        id
        post_id
      }
      title
      username
      talkZ_user {
        image
        id
        name
      }
    }
  }
`;
export const GET_POST_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getTalkZ_postListByTopic(topic: $topic) {
      talkZ_subtalkz {
        topic
      }
      body
      created_at
      id
      subtalkz_id
      media

      title
      username
      talkZ_user {
        image
        id
        name
      }
    }
  }
`;
export const GET_VOTE_LIST_BY_POST_ID = gql`
  query MyQuery($id: ID!) {
    getTalkz_voteUsingPost_id(id: $id) {
      upvote
      user_id
      username
      post_id
      id
      created_at
    }
  }
`;

export const GET_ALL_SUBTALKZ_BY_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getTalkZ_subtalkzListByLimit(limit: $limit) {
      topic
      id
      created_at
    }
  }
`;

export const SEARCH_SUBTALKZ = gql`
  query MyQuery($q:String!) {
    getTalkZ_subtalkzListBySearch(q: $q) {
      topic
      id
      created_at
    }
  }
`;

export const SEARCH_POSTS = gql`
  query MyQuery($q: String!) {
    getTalkZ_postListBySearch(q: $q) {
      body
      title
      media
      id
      created_at
      subtalkz_id
      username
      talkZ_subtalkz {
        topic
        id
        created_at
      }
      talkZ_user {
        id
        image
        name
        email
      }
      talkz_commentList {
        username
        text
        created_at
      }
      talkz_voteList {
        upvote
        created_at
      }
    }
  }
`;
