import datasource from '../../dataSources';
import pubsub from '../../dataSources/pubsub';

const { manager } = datasource({});

const Message = {
  Subscription: {
    messageReceived: {
      // More on pubsub below
      resolve: (payload) => {
        console.log('payload: ', payload);
        return payload.messageReceived;
      },
      subscribe: (_, { roomId }) => {
        console.log('roomId: ', roomId);

        return pubsub.asyncIterator([roomId]);
      },
    },
  },
  Mutation: {
    sendMessage: async (_, args) => {
      if (!args.user) {
        return null;
      }

      const { roomId, message: text, user } = args;
      // const message = await manager.sendMessage(roomId, user.id, text);

      const message = {
        user,
        text,
      };

      console.log('message: ', {
        roomId,
        text,
        user,
      });

      pubsub.publish(roomId, { messageReceived: message });

      return message;
    },
  },
};

export default Message;
