import PocketBase from 'pocketbase';


export default function Home(props) {
  return (<>
    <div className="container my-5">
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Welcome</strong> Welcome to the Tech Forums! Please take the time to read our Code of Conduct to familiarize yourself with the forum rules and how to post constructively.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        Make sure you keep the discussions clean.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>

    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Started On</th>
            <th scope="col">Replies</th>
            <th scope="col">Views</th>
            <th scope="col">Last Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The title of the Posts will be quite big</td>
            <td>123</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>)
}


export async function getServerSideProps(ctx) {
  const client = new PocketBase('http://127.0.0.1:8090');
  const records = await client.records.getFullList('posts', 200 /* batch size */, {
    sort: '-created',
  });

  return {
    props: {
      records
    }
  }
}