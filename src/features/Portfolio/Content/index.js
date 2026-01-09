import { Repositories } from "./Repositories/index";

export const Content = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return null;

        case "error":
            return null;

        case "success":
            return <Repositories repositories={repositories} />;

        default:
            throw new Error(`incorrect status: ${status}`);
    }
};