function Classes() {
    //Get the user
    const { data: user } = useQuery('user', getUser);

    //Then get the user's classes
    const { data: classes } = useQuery(['classes', user]);

    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            //Invalidate and refresh
            queryClient.invalidateQueries('classes')
        }
    })
}

