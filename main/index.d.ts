export declare type EndpointType = string;
export declare type MethodType = "POST" | "GET";
export declare type ParamsTypeGuardType = (params: any) => boolean;
export declare type SeamlessBlueprintPlugType = {
    endpoint: EndpointType;
    params: any;
    method: MethodType;
    response: any;
};
export interface RateLimitingConfigType {
    calls: number;
    per: number;
}
export declare type SeamlessBlueprintConstsType = {
    Endpoint: EndpointType;
    Method: MethodType;
    isPublic?: boolean;
    paramsSchema?: any;
    RateLimitingConfig?: RateLimitingConfigType;
};
export declare class SeamlessError extends Error {
    code: number;
    error: string;
    description: string;
    _isSeamlessError: boolean;
    constructor(code: number, error: string, description?: string);
}
export declare enum SeamlessRawServerToClientMessageEventEnum {
    "AUTH_ERROR" = "auth/error",
    "AUTH_SUCCESS" = "auth/success",
    "PONG" = "pong",
    "CONNECTION_CLOSE" = "connection-closed"
}
/**
 * Type of "event" in a raw server to client message
 */
export declare type SeamlessRawServerToClientMessageEventType = `${SeamlessRawServerToClientMessageEventEnum}` | `subscription-result.${string}` | `response.${string}` | `publication.${string}`;
export interface SeamlessS2CMessage_OutboxResponse {
    event: "outbox-response";
    messages: string[];
}
/**
 * The raw message (after EJSON parse) that goes into and comes out of the WebSocket
 */
export declare type SeamlessRawServerToClientMessageType = {
    event: SeamlessRawServerToClientMessageEventType;
    data: any;
} | SeamlessS2CMessage_OutboxResponse;
export declare enum SeamlessC2SEventEnum {
    "AUTH_LOGIN" = "auth/login",
    "PING" = "ping",
    "SUBSCRIBE_TO_TOPIC" = "subscribe-to-topic",
    "PUBLISH_TO_TOPIC" = "publish-to-topic",
    "CALL" = "call",
    "CHECK_OUTBOX" = "check-outbox"
}
export interface SeamlessC2SMessage_CheckOutbox {
    event: SeamlessC2SEventEnum.CHECK_OUTBOX;
    data: void;
}
/**
 * The raw message (after EJSON parse) that goes into and comes out of the WebSocket
 */
export declare type SeamlessRawClientToServerMessageType = {
    event: Omit<SeamlessC2SEventEnum, SeamlessC2SEventEnum.CHECK_OUTBOX>;
    data: any;
} | SeamlessC2SMessage_CheckOutbox;
/**
 * Type of a side effect
 */
export declare type SeamlessCallSideEffectType = {
    sideEffectId: string | number;
    method: string;
    params: any;
};
/**
 * Type of "data" for a Seamless Call event
 */
export declare type SeamlessCallType = {
    method: string;
    params: any;
    callId: string;
    sideEffects?: Array<SeamlessCallSideEffectType>;
};
/**
 * Message out of websocket that server sends to client on call response
 */
export declare type SeamlessCallResponseType<MutationResultType = any> = {
    mutationResult: MutationResultType;
    sideEffectResults: Array<{
        sideEffectId: string | number;
        result: any;
    }>;
};
export interface SeamlessSubscribeToTopicEventData {
    topic: string;
    topicId: string;
    params: any;
    id?: string;
}
export interface SeamlessPublishToTopicEventData {
    topic: string;
    topicId: string;
    data: any;
}
export interface SeamlessTopicSpecTyping {
    TopicNameType: string;
    SubscriptionParamsType: any;
    MessageType: any;
}
export interface SeamlessTopicSpecConstsType {
    TopicID: string;
    TopicNameRegExp: RegExp;
    SubscriptionParamsSchema?: any;
}
export interface SeamlessAuthenticationSpec {
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
export { SeamlessC2SEventEnum as SeamlessRawClientToServerMessageEventEnum };
/**
 * @deprecated
 */
export declare type SeamlessRawClientToServerMessageEventType = `${SeamlessC2SEventEnum}`;
