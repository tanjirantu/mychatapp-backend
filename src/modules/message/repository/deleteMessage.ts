import { Request, ResponseToolkit } from "@hapi/hapi";
import { flattenObject, sendResponse } from "../../../helper";
import { pubClient } from "../../../server/httpServer";
import MessageModel from "../model";

export default async (request: Request, h: ResponseToolkit) => {
	try {
		const uid: string = request.params.uid;
		const authUser = request.auth.credentials;

		const messages = await MessageModel.findOneAndUpdate({uid, senderUid: authUser.userUid},
            {
                $set: {isDeleted: true}
            },
            {new: true});

		return h.response(sendResponse(messages, 204, "UPDATED")).code(200);
	} catch (exp: any) {
		return h
			.response({
				statusCode: 500,
				message: "ERROR",
				error: exp.toString(),
			})
			.code(500);
	}
};
