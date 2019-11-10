import {Actions} from '../constants';
import Player from "../models/Player";
import {default as ModelAction} from "../models/Action";
import {DraftEvent} from "../models/DraftEvent";
import {IDraftConfig} from "../models/IDraftConfig";
import PlayerEvent from "../models/PlayerEvent";
import {ICountdownValues, IDraftState} from "../types";
import Preset from "../models/Preset";
import Turn from "../models/Turn";

export interface IActionCompleted {
    type: Actions.ACTION_COMPLETED,
    value: DraftEvent
}

export interface IApplyConfig {
    type: Actions.APPLY_CONFIG,
    value: IDraftConfig
}

export interface ISetName {
    player: Player,
    type: Actions.SET_NAME,
    value: string
}

export interface ISetReady {
    player: Player,
    type: Actions.SET_READY
}

export interface IChangeOwnName {
    type: Actions.CHANGE_OWN_NAME,
    value: string
}

export interface ISendJoin {
    type: Actions.SEND_JOIN,
    name: string
}

export interface ISendReady {
    type: Actions.SEND_READY
}

export interface IClickOnCiv {
    type: Actions.CLICK_CIVILISATION,
    playerEvent: PlayerEvent,
    callback: any
}

export interface ISetLanguage {
    type: Actions.SET_LANGUAGE,
    language: string
}

export interface ISetEvents {
    type: Actions.SET_EVENTS,
    value: { player: Player, action: ModelAction, events: DraftEvent[] }
}

export interface ICountdownEvent {
    type: Actions.COUNTDOWN,
    value: ICountdownValues
}

export interface IDisconnect {
    type: Actions.DISCONNECT
}

export interface IShowNameModal {
    type: Actions.SHOW_NAME_MODAL
}

export interface IReplayEvent {
    type: Actions.REPLAY
    value: IDraftState
}

export interface ISetEditorPreset {
    type: Actions.SET_EDITOR_PRESET
    value: Preset
}

export interface ISetEditorTurn {
    type: Actions.SET_EDITOR_TURN
    value: Turn | null,
    index: number
}

export interface ISetEditorName {
    type: Actions.SET_EDITOR_NAME
    value: string
}

export interface ISetEditorCivilisations {
    type: Actions.SET_EDITOR_CIVILISATIONS
    value: string
}

export type Action =
    ISetName
    | ISetReady
    | IChangeOwnName
    | IActionCompleted
    | IApplyConfig
    | ISendJoin
    | ISendReady
    | IClickOnCiv
    | ISetLanguage
    | ISetEvents
    | IDisconnect
    | ICountdownEvent
    | IShowNameModal
    | IReplayEvent
    | ISetEditorPreset
    | ISetEditorTurn
    | ISetEditorName
    | ISetEditorCivilisations;

export function setName(player: Player, value: string): ISetName {
    return {
        player,
        type: Actions.SET_NAME,
        value
    }
}

export function setReady(player: Player): ISetReady {
    return {
        player,
        type: Actions.SET_READY
    }
}

export function changeOwnName(value: string): IChangeOwnName {
    return {
        type: Actions.CHANGE_OWN_NAME,
        value
    }
}

export function act(value: DraftEvent): IActionCompleted {
    return {
        type: Actions.ACTION_COMPLETED,
        value
    }
}

export function applyConfig(value: IDraftConfig): IApplyConfig {
    return {
        type: Actions.APPLY_CONFIG,
        value
    }
}

export function sendJoin(name: string): ISendJoin {
    return {
        name,
        type: Actions.SEND_JOIN
    }
}

export function sendReady(): ISendReady {
    return {
        type: Actions.SEND_READY
    }
}

export function showNameModal(): IShowNameModal {
    return {
        type: Actions.SHOW_NAME_MODAL
    }
}

export function clickOnCiv(playerEvent: PlayerEvent, callback: any): IClickOnCiv {
    return {
        callback,
        playerEvent,
        type: Actions.CLICK_CIVILISATION
    }
}

export function setLanguage(language: string): ISetLanguage {
    return {
        language,
        type: Actions.SET_LANGUAGE
    }
}

export function setEvents(value: { player: Player, action: ModelAction, events: DraftEvent[] }): ISetEvents {
    return {
        value,
        type: Actions.SET_EVENTS
    }
}

export function disconnect(): IDisconnect {
    return {
        type: Actions.DISCONNECT
    }
}

export function replay(value: IDraftState): IReplayEvent {
    return {
        value,
        type: Actions.REPLAY
    }
}

export function setEditorPreset(value: Preset): ISetEditorPreset {
    return {
        value,
        type: Actions.SET_EDITOR_PRESET
    }
}

export function setEditorTurn(value: Turn | null, index: number): ISetEditorTurn {
    return {
        value,
        index,
        type: Actions.SET_EDITOR_TURN
    }
}

export function setEditorName(value: string): ISetEditorName {
    return {
        value,
        type: Actions.SET_EDITOR_NAME
    }
}

export function setEditorCivilisations(value: string): ISetEditorCivilisations {
    return {
        value,
        type: Actions.SET_EDITOR_CIVILISATIONS
    }
}
