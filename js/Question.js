class Question {
    constructor() {
        this.input = createInput("Name");
        this.input1 = createInput("Choose your option");
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        this.title = createElement('h1');
        this.reset = createButton('Reset');
    }

    display() {
    
        this.title.html("MY QUIZ GAME");
        this.title.position(600, 0);

        this.button.mousePressed(() => {
            this.title.hide();
            this.input1.hide();
            this.input.hide();
            this.button.hide();
            this.greeting.hide();
            contestant.name = this.input.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });

        this.reset.mousePressed(() => {
            quiz.update(0);
            contestant.updateCount(0);
        });

        this.button.position(608, 500);
        this.input.position(450, 450);
        this.input1.position(650, 450);
        this.greeting.html("Hello Welcome To Our Quiz")
        this.greeting.position(580, 50);

        this.question.html("Question:- What start and ends with letter 'E',but has only one letter?");
        this.question.position(450, 150);

        this.option1.html("1: Everyone");
        this.option1.position(450, 200);
        this.option2.html("2: Envelope");
        this.option2.position(450, 250);
        this.option3.html("3: Estimate");
        this.option3.position(450, 300);
        this.option4.html("4: Example");
        this.option4.position(450, 350);
        this.reset.position(50, 25);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
    };

    hide() {
        this.title.hide();
        this.input1.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}




