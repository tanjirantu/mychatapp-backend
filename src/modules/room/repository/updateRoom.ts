import { Request, ResponseToolkit } from "@hapi/hapi";
import { RoomUpdateInput } from "../types";
import { sendResponse, sendErrorResponse, flattenObject } from "../../../helper";
import generateRoomUid from "./generateRoomUid";
import RoomModel from "../model";
import UserModel from "../../user/model";

export default async (request: Request, h: ResponseToolkit) => {
	try {
		const authUser: any = request.auth.credentials;
		const payload: RoomUpdateInput = request.payload as RoomUpdateInput;

        const flattenUpdateQuery = flattenObject(payload);

		const room = await RoomModel.findOneAndUpdate({
            uid: request.params.uid,
            'users.uid': authUser.userUid,
        }, {
            $set: flattenUpdateQuery
        }, {
            new: true
        })

		return h.response(sendResponse(room, 204, "UPDATED")).code(200);
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
