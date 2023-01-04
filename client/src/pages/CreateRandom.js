import { useQuery, gql } from '@apollo/client';
import {Users} from '../components/Users';
export default function CreateRandom() {
  return (
    <div>
      <h2>Random Team From API Here 🚀</h2>
    <br/>
    <Users />
    </div>
  );
}