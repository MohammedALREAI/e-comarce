import { Action } from 'redux'


export enum EnumReviewAction {


     ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS',
     ADD_REVIEW_START = 'ADD_REVIEW_START',
     ADD_REVIEW_FILL = 'ADD_REVIEW_FILL',
}

export interface IAddReviewStart extends Action<string> {
     type: EnumReviewAction.ADD_REVIEW_START;

}

export interface IAddReviewSuccess extends Action<string> {
     type: EnumReviewAction.ADD_REVIEW_SUCCESS;
     payload: { success: boolean }

}
export interface IAddReviewActionFill extends Action<string> {
     type: EnumReviewAction.ADD_REVIEW_FILL;
     payload: {
          error: string
     }

}





export type TReviewAction =
IAddReviewStart |
IAddReviewSuccess |
IAddReviewActionFill
