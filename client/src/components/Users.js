import { useQuery } from "@apollo/client";
import { GET_USERS_QUERY } from "../queries/getUsers";

export function Users() {
    const {
        data,
        loading,
        error
    } = useQuery(GET_USERS_QUERY)
}