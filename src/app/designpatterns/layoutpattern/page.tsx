import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Panel = styled.div`
    flex: 1;
`;

export default function Page() {
    return (
        <Container>
            <Panel>
                aqui vai componente 1
            </Panel>
            <Panel>
                aqui vai componente 2
            </Panel>
        </Container>
    )
}