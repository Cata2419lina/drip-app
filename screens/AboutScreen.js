import { ScrollView } from "react-native-gesture-handler";
import { Card, Text, ListItem, Avatar } from "react-native-elements";
import { useSelector } from 'react-redux';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable'

const Mission = () => {
    return (
        <Card>
            <Card.Title>Diamond Records Intelligence Production (D.R.I.P)</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>Diamond Records Intelligence Production (DRIP) is a prominent hip-hop and R&B record label
            originating
            from
            the "Art of Movement," a Seattle-based B-Boying group which Epik High joined in 2003, featuring
            members such as B.I, Dial Tone, Junior, and Cha Cha Malone. Epik High founded DRIP in late September 2013,
            and initially signed composer Jay Park, singer and producer Gray, and Seattle affiliate Cha Cha
            Malone, who was a producer and dancer with B.I's dance crew Art of Movement. The label had
            its launch party on October 10, 2013, at "The A" in Seoul with Ben Baller as the host. The same
            month, the label released its first album, Gray's mini-album, Call Me Gray.
            Artists Elo, Loco, Ugly Duck, DJ Wegun, DJ Pumkin, and Hoody joined DRIP over the next two years.</Text>
        </Card>
    )
};

const AboutScreen = () => {
    const about = useSelector((state) => state.about);

    if (about.isLoading) {
        return (
            <ScrollView>
                <Mission />
                <Card>
                    <Card.Title>Diamond Records Intelligence Production (D.R.I.P)</Card.Title>
                    <Card.Divider />
                    <Loading />
                </Card>
            </ScrollView>
        );
    }
    if (about.errMess) {
        return (
            <ScrollView>
                <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={1000}
                >
                    <Mission />
                    <Card>
                        <Card.Title>Diamond Records Intelligence Production (D.R.I.P)</Card.Title>
                        <Card.Divider />
                        <Text>{about.errMess}</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
                <Mission />
                <Card>
                    <Card.Title>Diamond Records Intelligence Production (D.R.I.P)</Card.Title>
                    <Card.Divider />
                    {about.aboutArray.map((about) => {
                        return (
                            <ListItem key={about.id}>
                                <Avatar rounded source={{ uri: baseUrl + about.image }} />
                                <ListItem.Content>
                                    <ListItem.Title>{about.name}</ListItem.Title>
                                    <ListItem.Subtitle>
                                        {about.description}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        );
                    })}
                </Card>
            </Animatable.View>
        </ScrollView>
    );
};

export default AboutScreen;