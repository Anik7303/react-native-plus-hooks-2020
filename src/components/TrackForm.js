import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'

import { LocationContext, TrackContext } from '../contexts'
import Spacer from './Spacer'

const TrackForm = () => {
    const {
        state: { name, locations, recording },
        actions: locationActions,
    } = useContext(LocationContext)
    const { state, actions: trackActions } = useContext(TrackContext)

    return (
        <Spacer>
            <Input value={name} onChangeText={locationActions.changeName} />
            {recording ? (
                <Button
                    title="Stop"
                    onPress={locationActions.stopRecording}
                    style={styles.stop}
                />
            ) : (
                <Button
                    title="Start Recording"
                    onPress={locationActions.startRecording}
                />
            )}
            <Spacer />
            {!recording && locations.length > 0 ? (
                <Button
                    title="Save Recording"
                    onPress={async () => {
                        await trackActions.createTrack({ name, locations })
                        locationActions.reset()
                    }}
                />
            ) : null}
        </Spacer>
    )
}

const styles = StyleSheet.create({
    stop: {
        color: 'white',
        backgroundColor: 'red',
    },
})

export default TrackForm
