import Head from 'next/head'
import React, {useState} from "react";
import Page from "../components/Page";
import {Button, Card, Col, Collapse, Container, Nav, Navbar, NavItem, NavLink, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import CoursePreview from "../components/CoursePreview";
import fetch from "node-fetch";
import {API_URL} from "./_App";

const listSplit = 2;
export default class Homepage extends React.Component {

    static async getInitialProps(context) {

        let courses = [];
        let err;
        try {
            await fetch(API_URL + "/courses")
                .then(res => res.json())
                .then((data => {courses = data}));
        } catch (e) {
            err = e;
        }

        return {
            err: err,
            courses: courses
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {

        // TODO: this is a bad way of doing this, the entire page should be rendered as an "error page"
        if (this.props.err) {
            return (
                <div>
                    <Page>
                        <h1>Error 500</h1>
                        <h4>Gadzooks!</h4>
                        <p>Something went wrong</p>
                    </Page>
                </div>
            )
        }

        return (
            <div>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/public/favicon.ico"/>
                </Head>

                <Page>

                    <div>
                        <h1>EMT Training course list</h1>
                        <p>Here you can find all courses being offered for the EMT training program. {this.props.test}</p>
                        <div id={"courseList"} className={"bg-secondary rounded d-inline-block list-group-flush p-1"}>
                            <div>
                                {this.props.courses.slice(0, listSplit).map(course => { return (
                                    <div className={"list-group-item"}><CoursePreview id={course.Id} key={course.Id} title={course.CourseName}
                                                                                      desc={course.CourseDesc}/>
                                    </div>
                                )})}
                            </div>
                            <div id={"viewAll"}>
                                <hr/>
                                <div className={"d-flex justify-content-center pb-3"}>
                                    <a href={"javascript:void(0);"} onClick={() => {document.getElementById("viewAll").style.display = "none"; this.setState(state => ({open: !state.open}))}}>View all</a>
                                </div>
                            </div>
                            <Collapse in={this.state.open}>
                                <div id={"listCollapse"} className={"border-top"}>
                                    {this.props.courses.slice(listSplit, this.props.courses.length).map(course => { return (
                                        <div className={"list-group-item"}><CoursePreview id={course.Id} key={course.Id} title={course.CourseName}
                                                                                          desc={course.CourseDesc}/>
                                        </div>
                                    )})}
                                </div>
                            </Collapse>
                        </div>
                    </div>

                </Page>

            </div>
        );

    }
}
