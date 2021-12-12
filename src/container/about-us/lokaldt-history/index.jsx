import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import HistoryItem from "@components/history-item";
import {
    lokaldtHistoryWrap,
    lokaldtRow,
    lokaldtCol6,
    lokaldtHistoryTitle,
} from "./style";

const lokaldtHistoryArea = () => {
    const lokaldtHistoryAreaQery = useStaticQuery(graphql`
        query lokaldtHistoryAreaQery {
            aboutUsJson(id: { eq: "about-us-pages" }) {
                id
                history_title
                history {
                    id
                    title
                    decText
                }
            }
        }
    `);
    const { history_title, history } = lokaldtHistoryAreaQery.aboutUsJson;

    return (
        <lokaldtHistoryWrap>
            <Container>
                <Row>
                    <Col>
                        <lokaldtRow>
                            <lokaldtCol6>
                                <lokaldtHistoryTitle
                                    dangerouslySetInnerHTML={{
                                        __html: history_title,
                                    }}
                                />
                            </lokaldtCol6>
                            <lokaldtCol6>
                                {history.map((itemData) => (
                                    <HistoryItem
                                        key={itemData.id}
                                        title={itemData.title}
                                        decText={itemData.decText}
                                    />
                                ))}
                            </lokaldtCol6>
                        </lokaldtRow>
                    </Col>
                </Row>
            </Container>
        </lokaldtHistoryWrap>
    );
};

export default lokaldtHistoryArea;
