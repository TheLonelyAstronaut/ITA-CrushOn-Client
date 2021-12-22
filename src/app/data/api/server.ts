class APIService {
    getToken(authData: {login: string, password: string}) {
        const myAuthData = {
            login: "asdf",
            password: "asdf",
        };
        const myToken = "abpoqwrnafbwlkj";
        
        if (JSON.stringify(authData) === JSON.stringify(myAuthData))
            return myToken;
    }

    getUserInfo(token: string) {
        const myToken = "abpoqwrnafbwlkj";
        const myInfo = {
            id: 48,
            name: 'Liu',
            age: 23,
            imgUrl: 'https://yt3.ggpht.com/YXesX1-BuQmClDrybWgDnTthrtdD5BjkniOC83HXZZgNBNMNbv1jF50su3DIHrNaLTWWxPBxag=s900-c-k-c0x00ffffff-no-rj',
            lives: 'London',
            location: 4,
            passions: [
                'Singing with my granny',
                'Cybersport',
                "Music (but only Kizaru's songs)",
                'Spirituality',
                'Moviemaking like a pro',
            ],
            bio: `Hi, I’m Liu. I'm looking for someone who will go to the cinema with me. Message me if you like Marvel.`,
        }
        if (token === myToken)
            return myInfo;
    }
}

export const apiService = new APIService();