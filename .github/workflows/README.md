# Automatic tests

After completing all the steps in the project, automatic tests will become available to you. Tests are run on each commit - once all tasks in the Hexlet interface are completed, make a commit, and the tests will run automatically.

The hexlet-check.yml file is responsible for running these tests - do not delete this file, edit it, or rename the repository.


name: Java CI

on:
  - push
  - pull_request

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v2
        with:
          java-version: '17'
          distribution: 'temurin'
      - name: Build with Gradle
        uses: gradle/gradle-build-action@v2
        with:
          arguments: build
          build-root-directory: app
      - name: Publish code coverage
        uses: paambaati/codeclimate-action@v3.0.0
        env:
          CC_TEST_REPORTER_ID: ${{secrets.CC_TEST_REPORTER_ID}}
          JACOCO_SOURCE_PATH: app/src/main/java
        with:
          coverageCommand: make report
          coverageLocations: ${{github.workspace}}/app/build/reports/jacoco/test/jacocoTestReport.xml:jacoco
