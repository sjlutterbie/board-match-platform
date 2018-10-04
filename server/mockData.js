// Mock data to be called via API-like queries, prior to developing the
//  actual API solution.


const MOCK_USER_ACCOUNT = {};

const MOCK_IND_PROFILE = {
    id: "",
    name: {
      firstName: "",
      lastName: ""
    },
    contact: {
      phone: "",
      email: ""
    },
    summary: "",
    profExp: {},
    servExp: {},
    commLevels: {
      time: 2,
      skills: "",
      network: true,
      money: 3
    }
};

const MOCK_ORG_PROFILE = {};

const MOCK_APPLICATION = {};

const MOCK_POSITION = {};



function getIndividualProfile() {

  return MOCK_IND_PROFILE;

}

module.exports = { getIndividualProfile };