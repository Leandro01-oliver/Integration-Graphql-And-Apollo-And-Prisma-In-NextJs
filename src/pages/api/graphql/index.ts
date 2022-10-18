
import Cors from 'micro-cors';
import { server } from '../../../../utils/apollo';

const cors = Cors();

const startServer = server.start();

export default cors(

  async function handlerGraphql(
    req,
    res
  ) {
    if(req.method === "OPTIONS"){
      res.end();
      return false;
    }
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res);
  }
)

export const config = {
  api: {
    bodyParser: false
  }
}