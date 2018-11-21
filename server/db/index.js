const db = require("./dbConnection");

const dbUtils = {
  fetchApplicationRecordFromDB: ( appId ) => {
    return db.any(`SELECT * FROM application WHERE app_id = '${appId}'`)
  },
  fetchTourRecordFromDB: ( tourId ) => {
    return db.any(`SELECT * FROM tour WHERE tour_id = '${tourId}'`)
  }
}

/*
const getDeletionRecordByEntityID = (entityID, countryCode) => db.any(`SELECT * FROM audit_deletions WHERE entity_id = '${entityID}' AND country_code = '${countryCode}'`)
  .then(data => data)
  .catch((error) => {
    throw (error);
  });

const createReport = (customerID, cardholderNo, cleanedCC, displayData, requestedAt) =>
  db.any(`INSERT INTO reports(customer_id, cardholder_no, cleaned_cc, display_data, requested_at) VALUES ('${customerID}', '${cardholderNo}', '${cleanedCC}' ,'${displayData}', '${requestedAt}') ON CONFLICT (customer_id, cardholder_no) DO UPDATE SET cleaned_cc='${cleanedCC}', requested_at='${requestedAt}' returning display_data`)
    .then(data => data)
    .catch((error) => {
      throw (error);
    });

const getReportByCardholder = (customerID, cardholderNo) =>
  db.any(`SELECT cleaned_cc FROM reports where customer_id='${customerID}' and cardholder_no='${cardholderNo}'`)
    .then(data => data)
    .catch((error) => {
      throw (error);
    });

const logDeleteRequest = (country_code, entity_id, employee_email) =>
  db.any(`INSERT INTO audit_deletions(country_code, entity_id, employee_email) VALUES ('${country_code}', '${entity_id}', '${employee_email}')`)
    .then(data => data)
    .catch((error) => {
      throw (error);
    });

const logReportRequest = (country_code, entity_id, with_customer_data, employee_email) =>
  db.any(`INSERT INTO audit_report_requests (country_code, entity_id, with_customer_data, employee_email) VALUES ('${country_code}', '${entity_id}', '${with_customer_data}', '${employee_email}')`)
    .then(data => data)
    .catch((error) => {
      throw (error);
    });

const getReportsInfoByCustomerID = (customerID) =>
  db.any(`SELECT display_data FROM reports WHERE customer_id = '${customerID}'`)
    .then(data=> data)
    .catch(error => {
      throw (error);
    });
*/
module.exports = dbUtils