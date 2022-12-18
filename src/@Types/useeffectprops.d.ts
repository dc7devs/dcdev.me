import { Dispatch, SetStateAction } from "react";

export type useEffectProps = {
    isOpenedModal: boolean
    setIsOpenedModal: Dispatch<SetStateAction<boolean>>
}