import Head from 'next/head'
import React, {useState} from "react";
import Page from "../components/Page";
import {Button, Card, Col, Collapse, Container, Nav, Navbar, NavItem, NavLink, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CoursePreview from "../components/CoursePreview";

const Home = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <Page>
                <Row className={"h-100"}>
                    <div className={"sidebar pt-3 col-12 col-sm-7 col-md-4 col-lg-3 d-none d-md-block"}>
                        <div>
                            <Navbar variant={"dark"}>
                                <Nav className={"flex-column"}>
                                    <NavLink>Registration</NavLink>
                                    <div className={"ml-5"}>
                                        <NavLink active={false}>New students</NavLink>
                                        <NavLink active={false}>Current students</NavLink>
                                    </div>
                                    <NavLink active={false}>Tuition</NavLink>
                                    <div className={"ml-5"}>
                                        <NavLink active={false}>Payment options</NavLink>
                                        <NavLink active={false}>Reduced rates</NavLink>
                                    </div>
                                    <NavLink active={false}>Information sessions</NavLink>
                                    <NavLink active={false}>Contact</NavLink>
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                    <div className={"col p-4"}>
                        <div>
                            <h1>EMT Training course list</h1>
                            <p>Here you can find all courses being offered for the EMT training program.</p>
                            <div id={"courseList"} className={"bg-secondary py-3 rounded d-inline-block list-group-flush"}>
                                <div>
                                    <div className={"list-group-item"}><CoursePreview title={"CPR certification"}
                                                                                      desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nibh lacus. Etiam dui urna, sollicitudin vel odio vel, tempor."}/>
                                    </div>
                                    <div className={"list-group-item"}><CoursePreview title={"CPR certification"}
                                                                                      desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nibh lacus. Etiam dui urna, sollicitudin vel odio vel, tempor."}/>
                                    </div>
                                </div>
                                <hr/>
                                <div className={"d-flex justify-content-center"}>
                                    <a href={"javascript:void(0);"} id={"viewAll"} onClick={() => {document.getElementById("viewAll").style.display = "none"; return setOpen(!open)}}>View all</a>
                                </div>
                                <Collapse in={open}>
                                    <div id={"listCollapse"}>
                                        <div className={"list-group-item"}><CoursePreview title={"CPR certification"}
                                                                                          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nibh lacus. Etiam dui urna, sollicitudin vel odio vel, tempor."}/>
                                        </div>
                                        <div className={"list-group-item"}><CoursePreview title={"CPR certification"}
                                                                                          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nibh lacus. Etiam dui urna, sollicitudin vel odio vel, tempor."}/>
                                        </div>
                                        <div className={"list-group-item"}><CoursePreview title={"CPR certification"}
                                                                                          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nibh lacus. Etiam dui urna, sollicitudin vel odio vel, tempor."}/>
                                        </div>
                                        <div className={"list-group-item"}><CoursePreview title={"CPR certification"}
                                                                                          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nibh lacus. Etiam dui urna, sollicitudin vel odio vel, tempor."}/>
                                        </div>
                                        <div className={"list-group-item"}><CoursePreview title={"CPR certification"}
                                                                                          desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget nibh lacus. Etiam dui urna, sollicitudin vel odio vel, tempor."}/>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </Row>
            </Page>

        </div>
    );
};

export default Home
