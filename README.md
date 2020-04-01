# Microservice-Project-Spring2020
ASRC Federal Mission Solutions is in the process of evaluating some of our larger programs for decomposition into microservices. The team will start with a single, monolithic application of their choosing and decompose it into a group of microservices that provide the same functionality.  The solution will leverage Docker Containers for the runtime environment. The team’s experience and recommendations will provide valuable insights for AFMS into software decomposition process.

## How to use this repository

First, clone this project with `git clone https://github.com/AFMS-Rowan-Software-Projects/Microservice-Project-Spring2020.git`
and navigate into the created directory.

At the root of the project, there are several directories, each corresponding to a specific microservice. All code
should be inside one of those directories.

Before making changes, make sure you are not on the master branch. Use `git checkout <branch>` to change branches. You
should also make sure everything is up-to-date by running `git pull`.

To upload your work, commit all of your changes using `git commit <path> -m "<message>"` and push them up by using
`git push origin <branch>`. **DO NOT PUSH TO MASTER UNLESS YOU'RE ABSOLUTELY SURE OF WHAT YOU'RE DOING.**