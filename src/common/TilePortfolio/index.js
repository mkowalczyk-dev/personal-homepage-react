import {
    TilePortfolioWrapper,
    TilePortfolioTitle,
    TilePortfolioContainer,
    TilePortfolioList,
    TilePortfolioListItem,
    TilePortfolioLink
} from "./styled.js";

const TilePortfolio = () => {

    return (
        <TilePortfolioWrapper>
            <TilePortfolioContainer>
                <TilePortfolioTitle>My-VR-CV</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        In this project I'd like to show a little more about my past experiences - education, work history etc.
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:
                        <TilePortfolioLink href="https://hirazuku.github.io/My-VR-CV/">
                            https://hirazuku.github.io/My-VR-CV/
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Code:
                        <TilePortfolioLink href="https://github.com/Hirazuku/My-VR-CV">
                            https://github.com/Hirazuku/My-VR-CV
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
            <TilePortfolioContainer>
                <TilePortfolioTitle>Kuchnia-u-Kowala</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        Using this simple app you can make your list of products to buy without the need to search for what products you need for those meals
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:
                        <TilePortfolioLink href="https://hirazuku.github.io/Kuchnia-u-Kowala/">
                            https://hirazuku.github.io/Kuchnia-u-Kowala/
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Code:
                        <TilePortfolioLink href="https://github.com/Hirazuku/Kuchnia-u-Kowala">
                            https://github.com/Hirazuku/Kuchnia-u-Kowala
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
            <TilePortfolioContainer>
                <TilePortfolioTitle>todo-list-react</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        This app was built for writing down your own goals, whether they're long or short term. You can delete those, who are already done or just mark them and hide. It was built using React for more simple syntax and more user-friendly interface.
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:
                        <TilePortfolioLink href="https://hirazuku.github.io/todo-list-react/">
                            https://hirazuku.github.io/todo-list-react/
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Code:
                        <TilePortfolioLink href="https://github.com/Hirazuku/todo-list-react">
                            https://github.com/Hirazuku/todo-list-react
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
            <TilePortfolioContainer>
                <TilePortfolioTitle>movies-browser-react</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        Here I was working in a team made of 3 people. It was a lot of fun and I learnt a lot trying to understand and work on others code, commenting it, sometimes adding my own ideas. We were using gitHub and every pull request had to be reviewed by both other participants.
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:
                        <TilePortfolioLink href="https://mg-wiewiora.github.io/movies-browser-react/#/movies">
                            https://mg-wiewiora.github.io/movies-browser-react/#/movies
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Code:
                        <TilePortfolioLink href="https://github.com/mg-wiewiora/movies-browser-react">
                            https://github.com/mg-wiewiora/movies-browser-react
                        </TilePortfolioLink>
                    </TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
        </TilePortfolioWrapper>
    )
};

export default TilePortfolio;