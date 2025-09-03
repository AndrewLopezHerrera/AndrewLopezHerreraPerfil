import { Button, Card, Col, Row } from "antd";
import "./UniversityProjects.css"
import { EyeOutlined } from "@ant-design/icons";

const UniversityProjects : React.FC = () => {
    return (
        <section className="containerUniversityProjects">
            <h1>Proyectos Universitarios</h1>
            <Row className="rowProjects" gutter={[48, 24]} justify={'space-around'}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                        title="Parchis"
                        actions={[
                            <Button
                                icon={<EyeOutlined />}
                                key="view"
                                color="orange"
                                variant="filled"
                            >
                                Ver Proyecto
                            </Button>
                        ]}
                        className="projectsCards"
                    >
                    <label><strong>Autor:</strong> Mynell Myers y Andrew López</label>
                    <label><strong>Semestre:</strong> V</label>
                    <label><strong>Descripción:</strong> Juego de Parchís en línea.</label>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                        title="Wide World Importers"
                        actions={[
                            <Button
                                icon={<EyeOutlined />}
                                key="view"
                                color="orange"
                                variant="filled"
                            >
                                Ver Proyecto
                            </Button>
                        ]}
                        className="projectsCards"
                    >
                        <label><strong>Autor:</strong> Andrew López</label>
                        <label><strong>Semestre:</strong> V</label>
                        <label><strong>Descripción:</strong> Proyecto de importación y exportación en bases de datos.</label>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                        title="Proyecto 3"
                        actions={[
                            <Button
                                icon={<EyeOutlined />}
                                key="view"
                                color="orange"
                                variant="filled"
                            >
                                Ver Proyecto
                            </Button>
                        ]}
                        className="projectsCards"
                    >
                        <label><strong>Autor:</strong> Andrew López</label>
                        <label><strong>Semestre:</strong> V</label>
                        <label><strong>Descripción:</strong> Sistema de gestión de inventario y facturación.</label>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                        title="Mini PC Virtual"
                        actions={[
                            <Button
                                icon={<EyeOutlined />}
                                key="view"
                                color="orange"
                                variant="filled"
                            >
                                Ver Proyecto
                            </Button>
                        ]}
                        className="projectsCards"
                    >
                        <label><strong>Autor:</strong> Andrew López</label>
                        <label><strong>Semestre:</strong> V</label>
                        <label><strong>Descripción:</strong> Sistema que simula una PC con componentes virtuales.</label>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card
                        title="Compilador MIPS"
                        actions={[
                            <Button
                                icon={<EyeOutlined />}
                                key="view"
                                color="orange"
                                variant="filled"
                            >
                                Ver Proyecto
                            </Button>
                        ]}
                        className="projectsCards"
                    >
                        <label><strong>Autor:</strong> Hillary Malespin y Andrew López</label>
                        <label><strong>Semestre:</strong> V</label>
                        <label><strong>Descripción:</strong> Compilador de un lenguaje inventado hacia un lenguaje de bajo nivel.</label>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}

export default UniversityProjects;
