# if you want to see debug logs from Cypress
# or from code coverage plugin, set DEBUG environment variable
# for example DEBUG=code-coverage ./run-cypress.sh
docker run -it -v $PWD:/e2e -w /e2e \
  -e DEBUG \
  cypress/included:4.2.0
