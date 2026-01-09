import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioStart, selectRepositories, selectRepositoriesStatus } from "../portfolioSlice";
import { useEffect } from "react";
import { Content } from "./Content/index";
import { githubUsername } from "../../features/portfolioApi";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchPortfolioStart(githubUsername));
    }, [dispatch]);

    return (
        <Content
            status={repositoriesStatus}
            repositories={repositories} />
    )
}