import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import HistoryItem from "@components/history-item";
import {
    GagarathHistoryWrap,
    GagarathRow,
    GagarathCol6,
    GagarathHistoryTitle,
} from "./style";

const GagarathHistoryArea = () => {
    const gagarathHistoryAreaQery = useStaticQuery(graphql`
        query GagarathHistoryAreaQery {
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
    const { history_title, history } = gagarathHistoryAreaQery.aboutUsJson;

    return (
        <GagarathHistoryWrap>
            <Container>
                <Row>
                    <Col>
                        <GagarathRow>
                            <GagarathCol6>
                                <GagarathHistoryTitle
                                    dangerouslySetInnerHTML={{
                                        __html: history_title,
                                    }}
                                />
                            </GagarathCol6>
                            <GagarathCol6>
                                {history.map((itemData) => (
                                    <HistoryItem
                                        key={itemData.id}
                                        title={itemData.title}
                                        decText={itemData.decText}
                                    />
                                ))}
                            </GagarathCol6>
                        </GagarathRow>
                    </Col>
                </Row>
            </Container>
        </GagarathHistoryWrap>
    );
};

export default GagarathHistoryArea;
