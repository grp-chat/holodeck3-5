class TeamObjects {
    constructor() {

        this.team1Slots = [];
        this.team2Slots = [];

        this.team1OriginPosition = [
            {x:1, y:1, area: "area2"},
            {x:1, y:3, area: "area2"},
            {x:1, y:10, area: "area2"},
            {x:1, y:17, area: "area2"},
            {x:1, y:19, area: "area2"},
            {x:3, y:19, area: "area2"},
        ];
        this.team2OriginPosition = [
            {x:29, y:1, area: "area2"},
            {x:29, y:5, area: "area2"},
            {x:29, y:8, area: "area2"},
            {x:29, y:13, area: "area2"},
            {x:29, y:19, area: "area2"},
        ];

    }
}


module.exports = {
    TeamObjects,
}