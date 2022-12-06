import { gql } from "@apollo/client"

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
    image
    
    title
    username
    talkZ_user {
      email
      id
      image
      name
    }
  }
}


`

export const GET_SUBTALKZ_BY_TOPIC = gql`
    query MyQuery($topic:String!) {
        getTalkz_subtalkzListbyTopic(topic:$topic) {
            id
            topic
            created_at
        }
    }

`

export const GET_USER_BY_EMAIL = gql`
  query MyQuery($email:String!) {
    getTalkz_userByEmail(email:$email) {
      name
      email
      image
      id
    }
  }
`

export const GET_POST_BY_ID = gql`
  query MyQuery($id:ID!) {
  getTalkZ_post(id:$id) {
    talkZ_subtalkz {
      topic
    }
    body
    created_at
    id
    subtalkz_id
    image
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
      image,
      id,
      name
    }
  }
}

`
export const GET_POST_BY_TOPIC = gql`
  query MyQuery($topic:String!) {
    getTalkZ_postListByTopic(topic:$topic) {
      talkZ_subtalkz {
        topic
      }
      body
      created_at
      id
      subtalkz_id
      image
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
        image,
        id,
        name
      }
    }
  }

`
export const GET_VOTE_LIST_BY_POST_ID = gql`
  query MyQuery($id:ID!) {
    getTalkz_voteUsingPost_id(id:$id) {
      upvote
      user_id
      username
      post_id
      id
      created_at

    }
  }
`

export const GET_ALL_SUBTALKZ_BY_LIMIT = gql`
  query MyQuery($limit:Int!) {
    getTalkZ_subtalkzListByLimit(limit:$limit) {
      topic
      id
      created_at
    }
  }
`
