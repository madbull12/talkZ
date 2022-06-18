import { gql } from '@apollo/client';

export const ADD_POST = gql`
    mutation MyMutation(
        $body:String!
        $image:String!
        $subtalkz_id:ID!
        $title:String!
        $username:String!
    ) {
        insertTalkZ_post(
            body: $body
            image: $image 
            subtalkz_id: $subtalkz_id
            title: $title
            username: $username
        ) {
            body
            created_at
            id
            image
            subtalkz_id
            title
            username

        }
    }
`

export const ADD_SUBTALKZ = gql`
 mutation MyMutation($topic:String!) {
    insertTalkZ_subtalkz(topic:$topic){
        id
        topic
    }
 }
`

export const ADD_NEW_USER = gql`
    mutation MyMutation(
        $name:String!
        $email:String!
        $image:String!
    ) {
        insertTalkz_user(
            name:$name
            email:$email
            image:$image
        ) {
            name
            email
            image
        }
    }
`