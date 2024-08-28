export declare type EndpointType = string;
export declare type MethodType = "POST" | "GET";
export declare type ParamsTypeGuardType = (params: any) => boolean;
export declare type MoopsyBlueprintPlugType = {
    endpoint: EndpointType;
    params: any;
    method: MethodType;
    response: any;
};
export interface RateLimitingConfigType {
    calls: number;
    per: number;
}
export declare type MoopsyBlueprintConstsType = {
    Endpoint: EndpointType;
    Method: MethodType;
    isPublic?: boolean;
    paramsSchema?: any;
    RateLimitingConfig?: RateLimitingConfigType;
};
export declare class MoopsyError extends Error {
    code: number;
    error: string;
    description: string;
    _isMoopsyError: boolean;
    constructor(code: number, error: string, description?: string);
}
export declare enum MoopsyRawServerToClientMessageEventEnum {
    "AUTH_ERROR" = "auth/error",
    "AUTH_SUCCESS" = "auth/success",
    "PONG" = "pong",
    "CONNECTION_CLOSE" = "connection-closed"
}
/**
 * Type of "event" in a raw server to client message
 */
export declare type MoopsyRawServerToClientMessageEventType = `${MoopsyRawServerToClientMessageEventEnum}` | `subscription-result.${string}` | `response.${string}` | `publication.${string}`;
/**
 * The raw message (after EJSON parse) that goes into and comes out of the WebSocket
 */
export declare type MoopsyRawServerToClientMessageType = {
    event: MoopsyRawServerToClientMessageEventType;
    data: any;
};
export declare enum MoopsyC2SEventEnum {
    "AUTH_LOGIN" = "auth/login",
    "PING" = "ping",
    "SUBSCRIBE_TO_TOPIC" = "subscribe-to-topic",
    "PUBLISH_TO_TOPIC" = "publish-to-topic",
    "CALL" = "call",
    "CHECK_OUTBOX" = "check-outbox"
}
export interface MoopsyC2SMessage_CheckOutbox {
    event: MoopsyC2SEventEnum.CHECK_OUTBOX;
    data: void;
}
/**
 * The raw message (after EJSON parse) that goes into and comes out of the WebSocket
 */
export declare type MoopsyRawClientToServerMessageType = {
    event: Omit<MoopsyC2SEventEnum, MoopsyC2SEventEnum.CHECK_OUTBOX>;
    data: any;
} | MoopsyC2SMessage_CheckOutbox;
/**
 * Type of a side effect
 */
export declare type MoopsyCallSideEffectType = {
    sideEffectId: string | number;
    method: string;
    params: any;
};
/**
 * Type of "data" for a Moopsy Call event
 */
export declare type MoopsyCallType = {
    method: string;
    params: any;
    callId: string;
    sideEffects?: Array<MoopsyCallSideEffectType>;
};
/**
 * Message out of websocket that server sends to client on call response
 */
export declare type MoopsyCallResponseType<MutationResultType = any> = {
    mutationResult: MutationResultType;
    sideEffectResults: Array<{
        sideEffectId: string | number;
        result: any;
    }>;
};
export interface MoopsySubscribeToTopicEventData {
    topic: string;
    topicId: string;
    params: any;
    id?: string;
}
export interface MoopsyPublishToTopicEventData {
    topic: string;
    topicId: string;
    data: any;
}
export interface MoopsyTopicSpecTyping {
    TopicNameType: string;
    SubscriptionParamsType: any;
    MessageType: any;
}
export interface MoopsyTopicSpecConstsType {
    TopicID: string;
    TopicNameRegExp: RegExp;
    SubscriptionParamsSchema?: any;
}
export interface MoopsyAuthenticationSpec {
    PublicAuthType: any;
    AuthRequestType: any;
}
export interface IncomingRestRequestType {
    data: string;
    signature: string;
}
/**
 * @deprecated
 */
export { MoopsyC2SEventEnum as MoopsyRawClientToServerMessageEventEnum };
/**
 * @deprecated
 */
export declare type MoopsyRawClientToServerMessageEventType = `${MoopsyC2SEventEnum}`;
