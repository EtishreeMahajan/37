class Quiz {
    constructor() { }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if (contestantCountRef.exists()) {
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play() {
        question.hide();

        Contestant.getContestantInfo();

        textSize(30);
        fill(0);
        text("RESULT OF THE QUIZ", 600, 0);

        textSize(30);
        fill("blue");
        text("NOTE :- CONTESTANT WHO ANSWERED CORRECT ARE HIGHLIGHTED IN GREEN COLOR!", 25, 400);

        if (allContestants !== undefined) {
            for (var plr in allContestants) {
                var correctAns = "2";
                if (correctAns === allContestants[plr].answer)
                    fill("green")
                else
                    fill("red");
                textSize(15);
                text(allContestants[i].name + ": " + allContestants[i].answer, 120,250);
            }
        }
    }
}