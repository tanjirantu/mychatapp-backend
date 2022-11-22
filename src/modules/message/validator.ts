import Joi from "joi";

const getMessages = {
	params: {
		roomUid: Joi.string(),
	},
	query: {
		includeOnly: Joi.string(),
		searchText: Joi.string(),
		skip: Joi.string(),
		limit: Joi.string(),
	},
};

const deleteMessage = {
	params: {
		uid: Joi.string(),
	}
}

export default {
	getMessages,
	deleteMessage
};
