// =====================================
// EXTREMELY HARD MATH
// CASTLE DEFENCE GAME
// =====================================


// =====================================
// HTML ELEMENTS
// =====================================

const battlefield =
    document.getElementById("battlefield");

const enemyContainer =
    document.getElementById("enemyContainer");

const arrowContainer =
    document.getElementById("arrowContainer");

const spellContainer =
    document.getElementById("spellContainer");


// =====================================
// TOP STATS
// =====================================

const goldText =
    document.getElementById("gold");

const mageCoinsText =
    document.getElementById("mageCoins");

const waveText =
    document.getElementById("wave");

const pauseButton =
    document.getElementById("pauseButton");

const resetGameButton =
    document.getElementById("resetGameButton");


// =====================================
// MAGE COIN CODE SYSTEM
// =====================================

const mageCodeInput =
    document.getElementById("mageCodeInput");

const redeemMageCodeButton =
    document.getElementById("redeemMageCodeButton");

const mageCodeMessage =
    document.getElementById("mageCodeMessage");


const adminCodeInput =
    document.getElementById("adminCodeInput");

const adminCodeButton =
    document.getElementById("adminCodeButton");


const newCodeArea =
    document.getElementById("newCodeArea");

const newMageCodeInput =
    document.getElementById("newMageCodeInput");

const saveNewMageCodeButton =
    document.getElementById("saveNewMageCodeButton");


// =====================================
// CASTLE
// =====================================

const castleHealthFill =
    document.getElementById("castleHealthFill");

const castleHealthText =
    document.getElementById("castleHealthText");


// =====================================
// STATS
// =====================================

const castleStat =
    document.getElementById("castleStat");

const arrowDamageStat =
    document.getElementById("arrowDamageStat");

const goldStat =
    document.getElementById("goldStat");

const mageCoinStat =
    document.getElementById("mageCoinStat");


// =====================================
// QUESTION
// =====================================

const waveStartPanel =
    document.getElementById("waveStartPanel");

const readyWave =
    document.getElementById("readyWave");

const bottomWave =
    document.getElementById("bottomWave");

const bossWarning =
    document.getElementById("bossWarning");

const answerInput =
    document.getElementById("answer");

const startWaveButton =
    document.getElementById("startWaveButton");

const questionMessage =
    document.getElementById("questionMessage");

const questionText =
    document.getElementById("question");


// =====================================
// MANA
// =====================================

const manaFill =
    document.getElementById("manaFill");

const manaText =
    document.getElementById("manaText");

const manaStatus =
    document.getElementById("manaStatus");


// =====================================
// MAGES
// =====================================

const fireMageButton =
    document.getElementById("fireMage");

const iceMageButton =
    document.getElementById("iceMage");

const stormMageButton =
    document.getElementById("stormMage");

const poisonMageButton =
    document.getElementById("poisonMage");

const ultimateMageButton =
    document.getElementById("ultimateMage");


const fireCooldownText =
    document.getElementById("fireCooldownText");

const iceCooldownText =
    document.getElementById("iceCooldownText");

const stormCooldownText =
    document.getElementById("stormCooldownText");

const poisonCooldownText =
    document.getElementById("poisonCooldownText");

const ultimateCooldownText =
    document.getElementById("ultimateCooldownText");


// =====================================
// NORMAL SHOP
// =====================================

const arrowUpgrade =
    document.getElementById("arrowUpgrade");

const castleUpgrade =
    document.getElementById("castleUpgrade");

const archerUpgrade =
    document.getElementById("archerUpgrade");

const manaUpgrade =
    document.getElementById("manaUpgrade");


const arrowDamageValue =
    document.getElementById("arrowDamageValue");

const castleHealthValue =
    document.getElementById("castleHealthValue");

const archerLevelValue =
    document.getElementById("archerLevelValue");

const maxManaValue =
    document.getElementById("maxManaValue");


const arrowCostText =
    document.getElementById("arrowCostText");

const castleCostText =
    document.getElementById("castleCostText");

const archerCostText =
    document.getElementById("archerCostText");

const manaUpgradeCostText =
    document.getElementById("manaUpgradeCostText");


// =====================================
// MAGE SHOP
// =====================================

const fireUpgrade =
    document.getElementById("fireUpgrade");

const iceUpgrade =
    document.getElementById("iceUpgrade");

const stormUpgrade =
    document.getElementById("stormUpgrade");

const poisonUpgrade =
    document.getElementById("poisonUpgrade");


const fireLevelText =
    document.getElementById("fireLevelText");

const iceLevelText =
    document.getElementById("iceLevelText");

const stormLevelText =
    document.getElementById("stormLevelText");

const poisonLevelText =
    document.getElementById("poisonLevelText");

const fireUpgradeCostText =
    document.getElementById("fireUpgradeCostText");


// =====================================
// ULTIMATE MAGE
// =====================================

const ultimateCard =
    document.getElementById("ultimateCard");

const ultimateUnlockButton =
    document.getElementById("ultimateUnlock");

const ultimateStatusText =
    document.getElementById("ultimateStatusText");


// =====================================
// OTHER
// =====================================

const messageText =
    document.getElementById("message");

const gameOverPanel =
    document.getElementById("gameOver");

const finalWaveText =
    document.getElementById("finalWave");

const restartButton =
    document.getElementById("restartButton");


// =====================================
// GAME STATE
// =====================================

let gameRunning = true;

let gamePaused = false;

let battleActive = false;

let correctAnswer = 0;


// =====================================
// WAVE
// =====================================

let wave = 1;


// =====================================
// CURRENCIES
// =====================================

let gold = 0;

let mageCoins = 0;


// =====================================
// CASTLE
// =====================================

let castleHealth = 100;

let maxCastleHealth = 100;


// =====================================
// ARCHERS
// =====================================

let arrowDamage = 5;

let archerLevel = 1;


// =====================================
// MANA
// =====================================

let mana = 100;

let maxMana = 100;


// 0.2 MP every 100ms
// = about 2 MP per second

const manaRegenAmount = 0.2;


// =====================================
// RESPONSIVE ENEMY SPEED
// =====================================
//
// On a narrow screen the enemies have a
// shorter distance to the castle.
//
// Instead of spawning enemies far off-screen,
// this code slows them down proportionally.
//
// That means an iPad should give you roughly
// the same amount of fighting time as a
// computer.
//

const referenceEnemyTravelDistance = 900;

const castleHitPosition = 215;


// =====================================
// MAGES
// =====================================


// FIRE STARTS UNLOCKED

let fireUnlocked = true;

let fireLevel = 1;


// ICE

let iceUnlocked = false;

let iceLevel = 0;


// STORM

let stormUnlocked = false;

let stormLevel = 0;


// POISON

let poisonUnlocked = false;

let poisonLevel = 0;


// ULTIMATE

let ultimateUnlocked = false;


// =====================================
// MAGE MANA COSTS
// =====================================

const fireManaCost = 30;

const iceManaCost = 25;

const stormManaCost = 40;

const poisonManaCost = 35;


// =====================================
// CURRENT COOLDOWNS
// =====================================

let fireCooldown = 0;

let iceCooldown = 0;

let stormCooldown = 0;

let poisonCooldown = 0;

let ultimateCooldown = 0;


// =====================================
// MAGE COOLDOWN LENGTHS
// =====================================
//
// Upgrading a mage:
// 1. increases damage
// 2. reduces cooldown
//
// Cooldowns cannot fall below the minimum.
//

function getFireCooldownMax() {

    return Math.max(
        4,
        10 -
        (
            fireLevel - 1
        ) *
        0.75
    );

}


function getIceCooldownMax() {

    return Math.max(
        5,
        12 -
        (
            iceLevel - 1
        ) *
        0.9
    );

}


function getStormCooldownMax() {

    return Math.max(
        7,
        16 -
        (
            stormLevel - 1
        ) *
        1.1
    );

}


function getPoisonCooldownMax() {

    return Math.max(
        8,
        20 -
        (
            poisonLevel - 1
        ) *
        1.2
    );

}


// Ultimate cooldown = 3 minutes

const ultimateCooldownMax = 180;


// =====================================
// ULTIMATE ARCHER BOOST
// =====================================
//
// Ultimate destroys the current wave.
//
// THEN, for the NEXT 3 waves:
//
// Arrow damage = x2
// Archer firing speed = x2
//

let ultimateBuffWavesRemaining = 0;

let ultimateBuffStartWave = 0;


function ultimateBuffActive() {

    return (
        ultimateBuffWavesRemaining > 0 &&
        wave >= ultimateBuffStartWave
    );

}


// =====================================
// SHOP COSTS
// =====================================


// NORMAL GOLD

let arrowCost = 20;

let castleCost = 25;

let archerCost = 30;

let manaUpgradeCost = 40;


// MAGE COINS

let fireUpgradeCost = 2;

let iceUpgradeCost = 2;

let stormUpgradeCost = 4;

let poisonUpgradeCost = 4;


// =====================================
// ENEMIES
// =====================================

let enemies = [];

let enemyID = 0;

let enemiesToSpawn = 0;

let enemiesSpawned = 0;

let enemiesAlive = 0;

let spawningFinished = false;

let spawnTimer = null;


// =====================================
// MAGE COIN REDEEMER
// =====================================
//
// Default code:
//
// 0308
//
// Gives 4 Mage Coins.
//
// It can only be used ONCE.
//
// This is stored separately from the game
// save so Restart does not make it usable
// again.
//

let mageRedeemerCode =
    localStorage.getItem(
        "mageRedeemerCode"
    ) ||
    "0308";


let mageRedeemerUsed =
    localStorage.getItem(
        "mageRedeemerUsed"
    ) ===
    "true";


// =====================================
// REDEEM CODE
// =====================================

redeemMageCodeButton.addEventListener(
    "click",
    function() {

        const enteredCode =
            mageCodeInput.value.trim();


        if (
            enteredCode !==
            mageRedeemerCode
        ) {

            mageCodeMessage.textContent =
                "❌ Incorrect Mage Coin code.";

            return;

        }


        if (
            mageRedeemerUsed
        ) {

            mageCodeMessage.textContent =
                "❌ This Mage Coin code has already been used.";

            return;

        }


        mageCoins +=
            4;


        mageRedeemerUsed =
            true;


        localStorage.setItem(
            "mageRedeemerUsed",
            "true"
        );


        mageCodeMessage.textContent =
            "🪙 Code accepted! +4 Mage Coins!";


        mageCodeInput.value =
            "";


        saveGame();

        updateUI();

    }
);


// ENTER ALSO WORKS

mageCodeInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            redeemMageCodeButton.click();

        }

    }
);


// =====================================
// CODE CHANGER
// =====================================
//
// Secret changer password:
//
// 2802
//
// Entering this reveals the box where
// you can create a NEW 4 Mage Coin code.
//

adminCodeButton.addEventListener(
    "click",
    function() {

        const enteredCode =
            adminCodeInput.value.trim();


        if (
            enteredCode ===
            "2802"
        ) {

            newCodeArea.style.display =
                "block";


            mageCodeMessage.textContent =
                "🔓 Code changer unlocked.";

        }

        else {

            mageCodeMessage.textContent =
                "❌ Incorrect changer code.";

        }


        adminCodeInput.value =
            "";

    }
);


adminCodeInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            adminCodeButton.click();

        }

    }
);


// =====================================
// SAVE NEW MAGE COIN CODE
// =====================================
//
// Making a new code also resets the
// redeemer so the NEW code can be used
// once.
//

saveNewMageCodeButton.addEventListener(
    "click",
    function() {

        const newCode =
            newMageCodeInput.value.trim();


        if (
            newCode.length === 0
        ) {

            mageCodeMessage.textContent =
                "❌ Enter a new Mage Coin code.";

            return;

        }


        mageRedeemerCode =
            newCode;


        mageRedeemerUsed =
            false;


        localStorage.setItem(
            "mageRedeemerCode",
            mageRedeemerCode
        );


        localStorage.setItem(
            "mageRedeemerUsed",
            "false"
        );


        newMageCodeInput.value =
            "";


        newCodeArea.style.display =
            "none";


        mageCodeMessage.textContent =
            "✅ New Mage Coin code saved. It can now be redeemed once.";

    }
);


// =====================================
// PREPARE WAVE
// =====================================

function prepareWave() {

    battleActive =
        false;


    readyWave.textContent =
        wave;


    bottomWave.textContent =
        wave;


    answerInput.value =
        "";


    questionMessage.textContent =
        "";


    const number1 =
        Math.floor(
            Math.random() * 10
        ) +
        1;


    const number2 =
        Math.floor(
            Math.random() * 10
        ) +
        1;


    correctAnswer =
        number1 +
        number2;


    questionText.textContent =
        number1 +
        " + " +
        number2 +
        " = ?";


    waveStartPanel.style.display =
        "block";


    manaStatus.textContent =
        "⏸ Mana regeneration and mage cooldowns are stopped between waves.";


    // MAIN BOSS
    // Waves 10, 20, 30...

    if (
        wave % 10 === 0
    ) {

        bossWarning.textContent =
            "👹 BOSS WAVE! Defeat the boss to earn 2 Mage Coins!";

    }


    // MINI BOSS
    // Waves 5, 15, 25...

    else if (
        wave % 5 === 0
    ) {

        bossWarning.textContent =
            "⚔️ MINI BOSS WAVE! Defeat the mini boss to earn 2 Mage Coins!";

    }


    else {

        bossWarning.textContent =
            "";

    }


    updateUI();


    answerInput.focus();

}


// =====================================
// QUESTION
// =====================================

function tryStartWave() {

    if (
        !gameRunning
    ) {

        return;

    }


    if (
        gamePaused
    ) {

        questionMessage.textContent =
            "Resume the game first.";

        return;

    }


    const answer =
        Number(
            answerInput.value
        );


    if (
        answer !==
        correctAnswer
    ) {

        questionMessage.textContent =
            "❌ Wrong. Try again!";

        return;

    }


    questionMessage.textContent =
        "✅ Correct!";


    waveStartPanel.style.display =
        "none";


    beginWave();

}


startWaveButton.addEventListener(
    "click",
    tryStartWave
);


answerInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Enter"
        ) {

            tryStartWave();

        }

    }
);


// =====================================
// BEGIN WAVE
// =====================================

function beginWave() {

    battleActive =
        true;


    enemiesSpawned =
        0;


    spawningFinished =
        false;


    manaStatus.textContent =
        "▶ Mana regeneration and cooldowns are active.";


    // =====================================
    // MAIN BOSS
    // =====================================

    if (
        wave % 10 === 0
    ) {

        enemiesToSpawn =
            1;


        createEnemy(
            true,
            false
        );


        enemiesSpawned =
            1;


        spawningFinished =
            true;


        messageText.textContent =
            "👹 BOSS WAVE " +
            wave +
            "!";


        return;

    }


    // =====================================
    // MINI BOSS
    // =====================================

    if (
        wave % 5 === 0
    ) {

        enemiesToSpawn =
            1;


        createEnemy(
            false,
            true
        );


        enemiesSpawned =
            1;


        spawningFinished =
            true;


        messageText.textContent =
            "⚔️ MINI BOSS WAVE " +
            wave +
            "!";


        return;

    }


    // =====================================
    // NORMAL WAVE
    // =====================================

    enemiesToSpawn =
        3 +
        Math.floor(
            wave *
            1.35
        );


    messageText.textContent =
        "⚔️ Wave " +
        wave +
        " begins!";


    spawnTimer =
        setInterval(

            function() {

                if (
                    !gameRunning
                ) {

                    clearInterval(
                        spawnTimer
                    );


                    spawnTimer =
                        null;


                    return;

                }


                if (
                    gamePaused ||
                    !battleActive
                ) {

                    return;

                }


                createEnemy(
                    false,
                    false
                );


                enemiesSpawned++;


                if (
                    enemiesSpawned >=
                    enemiesToSpawn
                ) {

                    spawningFinished =
                        true;


                    clearInterval(
                        spawnTimer
                    );


                    spawnTimer =
                        null;


                    checkWaveComplete();

                }

            },

            750

        );

}


// =====================================
// RESPONSIVE SPEED
// =====================================

function getResponsiveEnemySpeed(
    normalSpeed,
    spawnX
) {

    const actualDistance =
        Math.max(
            180,
            spawnX -
            castleHitPosition
        );


    const screenScale =
        actualDistance /
        referenceEnemyTravelDistance;


    return (
        normalSpeed *
        screenScale
    );

}


// =====================================
// CREATE ENEMY
// =====================================

function createEnemy(
    boss = false,
    miniBoss = false
) {

    let enemyHealth =
        25 +
        wave *
        10;


    // MINI BOSS HEALTH

    if (
        miniBoss
    ) {

        enemyHealth =
            300 +
            wave *
            35;

    }


    // MAIN BOSS HEALTH

    if (
        boss
    ) {

        enemyHealth =
            450 +
            wave *
            45;

    }


    // NORMAL SPEED

    let normalSpeed =
        0.31 +
        wave *
        0.0126;


    // MINI BOSS

    if (
        miniBoss
    ) {

        normalSpeed =
            0.27;

    }


    // MAIN BOSS

    if (
        boss
    ) {

        normalSpeed =
            0.24;

    }


    // =====================================
    // SPAWN AT RIGHT SIDE
    // =====================================

    let spawnOffset =
        100;


    if (
        miniBoss
    ) {

        spawnOffset =
            140;

    }


    if (
        boss
    ) {

        spawnOffset =
            165;

    }


    const spawnX =
        Math.max(
            castleHitPosition + 200,
            battlefield.clientWidth -
            spawnOffset
        );


    // Adjust enemy speed for the available
    // width so iPad players do not have
    // less reaction time.

    const responsiveSpeed =
        getResponsiveEnemySpeed(
            normalSpeed,
            spawnX
        );


    const enemy = {

        id:
            enemyID++,

        health:
            enemyHealth,

        maxHealth:
            enemyHealth,

        x:
            spawnX,

        speed:
            responsiveSpeed,

        alive:
            true,

        boss:
            boss,

        miniBoss:
            miniBoss,

        frozen:
            0,

        poisoned:
            false,

        poisonDamagePerSecond:
            0,

        element:
            null,

        healthFill:
            null,

        healthText:
            null

    };


    const enemyElement =
        document.createElement(
            "div"
        );


    enemyElement.className =
        (
            boss ||
            miniBoss
        )
        ? "enemy bossEnemy"
        : "enemy";


    // =====================================
    // BOSS LABEL
    // =====================================

    if (
        boss ||
        miniBoss
    ) {

        const bossLabel =
            document.createElement(
                "div"
            );


        bossLabel.className =
            "bossLabel";


        bossLabel.textContent =
            boss
            ? "👑 BOSS"
            : "⚔️ MINI BOSS";


        enemyElement.appendChild(
            bossLabel
        );

    }


    // =====================================
    // HEALTH BAR
    // =====================================

    const healthBar =
        document.createElement(
            "div"
        );


    healthBar.className =
        "enemyHealthBar";


    const healthFill =
        document.createElement(
            "div"
        );


    healthFill.className =
        "enemyHealthFill";


    healthBar.appendChild(
        healthFill
    );


    enemyElement.appendChild(
        healthBar
    );


    // =====================================
    // ENEMY BODY
    // =====================================

    const body =
        document.createElement(
            "div"
        );


    if (
        boss ||
        miniBoss
    ) {

        body.className =
            "enemyBody bossBody";

    }

    else {

        const types = [
            "",
            "green",
            "red",
            "blue"
        ];


        const type =
            types[
                Math.floor(
                    Math.random() *
                    types.length
                )
            ];


        body.className =
            "enemyBody " +
            type;

    }


    body.innerHTML = `

        <div class="horn left"></div>

        <div class="horn right"></div>

        <div class="enemyEye left"></div>

        <div class="enemyEye right"></div>

        <div class="enemyMouth"></div>

    `;


    enemyElement.appendChild(
        body
    );


    // =====================================
    // HEALTH NUMBER
    // =====================================

    const healthText =
        document.createElement(
            "div"
        );


    healthText.className =
        "enemyHealthText";


    healthText.textContent =
        Math.ceil(
            enemy.health
        );


    enemyElement.appendChild(
        healthText
    );


    enemyContainer.appendChild(
        enemyElement
    );


    enemy.element =
        enemyElement;


    enemy.healthFill =
        healthFill;


    enemy.healthText =
        healthText;


    enemies.push(
        enemy
    );


    enemiesAlive++;


    updateEnemyPosition(
        enemy
    );

}


// =====================================
// ENEMY POSITION
// =====================================

function updateEnemyPosition(
    enemy
) {

    if (
        !enemy.element
    ) {

        return;

    }


    enemy.element.style.left =
        enemy.x +
        "px";

}


// =====================================
// MOVE ENEMIES
// =====================================

function moveEnemies() {

    if (
        gameRunning &&
        !gamePaused &&
        battleActive
    ) {

        enemies.forEach(

            function(enemy) {

                if (
                    !enemy.alive
                ) {

                    return;

                }


                let speed =
                    enemy.speed;


                // ICE SLOW

                if (
                    enemy.frozen > 0
                ) {

                    speed *=
                        0.42;

                }


                enemy.x -=
                    speed;


                // REACHED CASTLE

                if (
                    enemy.x <=
                    castleHitPosition
                ) {

                    enemyHitCastle(
                        enemy
                    );

                }


                if (
                    enemy.alive
                ) {

                    updateEnemyPosition(
                        enemy
                    );

                }

            }

        );

    }


    requestAnimationFrame(
        moveEnemies
    );

}


// =====================================
// ENEMY HITS CASTLE
// =====================================

function enemyHitCastle(
    enemy
) {

    if (
        !enemy.alive
    ) {

        return;

    }


    enemy.alive =
        false;


    let damage =
        9 +
        Math.floor(
            wave /
            3
        );


    // MINI BOSS

    if (
        enemy.miniBoss
    ) {

        damage *=
            2;

    }


    // MAIN BOSS

    if (
        enemy.boss
    ) {

        damage *=
            3;

    }


    castleHealth -=
        damage;


    if (
        castleHealth < 0
    ) {

        castleHealth =
            0;

    }


    removeEnemy(
        enemy,
        false
    );


    messageText.textContent =
        "💥 Castle took " +
        damage +
        " damage!";


    updateUI();


    if (
        castleHealth <=
        0
    ) {

        gameOver();

    }

}


// =====================================
// ARCHER DAMAGE
// =====================================

function getCurrentArrowDamage() {

    if (
        ultimateBuffActive()
    ) {

        return (
            arrowDamage *
            2
        );

    }


    return arrowDamage;

}


// =====================================
// ARCHER FIRING SPEED
// =====================================

function getCurrentArcherDelay() {

    const normalDelay =
        Math.max(

            330,

            1100 -
            archerLevel *
            85

        );


    // Ultimate buff doubles firing speed

    if (
        ultimateBuffActive()
    ) {

        return Math.max(
            165,
            normalDelay /
            2
        );

    }


    return normalDelay;

}


// =====================================
// ARCHER LOOP
// =====================================

function archerLoop() {

    if (
        gameRunning &&
        !gamePaused &&
        battleActive
    ) {

        const target =
            getClosestEnemy();


        if (
            target
        ) {

            shootArrow(
                target
            );

        }

    }


    setTimeout(
        archerLoop,
        getCurrentArcherDelay()
    );

}


// =====================================
// CLOSEST ENEMY
// =====================================

function getClosestEnemy() {

    const livingEnemies =
        enemies.filter(

            function(enemy) {

                return enemy.alive;

            }

        );


    if (
        livingEnemies.length ===
        0
    ) {

        return null;

    }


    livingEnemies.sort(

        function(a, b) {

            return (
                a.x -
                b.x
            );

        }

    );


    return livingEnemies[0];

}


// =====================================
// SHOOT ARROW
// =====================================

function shootArrow(
    target
) {

    if (
        !target ||
        !target.alive
    ) {

        return;

    }


    const arrow =
        document.createElement(
            "div"
        );


    arrow.className =
        "arrow";


    arrow.textContent =
        "➶";


    arrowContainer.appendChild(
        arrow
    );


    const startX =
        210;


    const startY =
        245;


    let progress =
        0;


    function animateArrow() {

        if (
            !gameRunning
        ) {

            arrow.remove();

            return;

        }


        if (
            gamePaused ||
            !battleActive
        ) {

            requestAnimationFrame(
                animateArrow
            );

            return;

        }


        progress +=
            0.035;


        const targetX =
            target.alive
            ? target.x + 25
            : startX + 350;


        const x =
            startX +
            (
                targetX -
                startX
            ) *
            progress;


        const arc =
            Math.sin(
                progress *
                Math.PI
            ) *
            70;


        const y =
            startY -
            arc;


        arrow.style.left =
            x +
            "px";


        arrow.style.top =
            y +
            "px";


        if (
            progress <
            1
        ) {

            requestAnimationFrame(
                animateArrow
            );

        }

        else {

            arrow.remove();


            if (
                target.alive
            ) {

                damageEnemy(

                    target,

                    getCurrentArrowDamage()

                );

            }

        }

    }


    requestAnimationFrame(
        animateArrow
    );

}


// =====================================
// DAMAGE ENEMY
// =====================================

function damageEnemy(
    enemy,
    damage
) {

    if (
        !enemy ||
        !enemy.alive
    ) {

        return;

    }


    enemy.health -=
        damage;


    if (
        enemy.health < 0
    ) {

        enemy.health =
            0;

    }


    enemy.healthText.textContent =
        Math.ceil(
            enemy.health
        );


    const percent =
        (
            enemy.health /
            enemy.maxHealth
        ) *
        100;


    enemy.healthFill.style.width =
        percent +
        "%";


    if (
        enemy.health <=
        0
    ) {

        killEnemy(
            enemy
        );

    }

}


// =====================================
// KILL ENEMY
// =====================================

function killEnemy(
    enemy
) {

    if (
        !enemy.alive
    ) {

        return;

    }


    enemy.alive =
        false;


    let reward =
        5 +
        Math.floor(
            wave /
            2
        );


    // =====================================
    // MAIN BOSS
    // =====================================

    if (
        enemy.boss
    ) {

        reward =
            50 +
            wave *
            2;


        mageCoins +=
            2;


        messageText.textContent =
            "👑 BOSS DEFEATED! +" +
            reward +
            " Gold and +2 Mage Coins!";

    }


    // =====================================
    // MINI BOSS
    // =====================================

    else if (
        enemy.miniBoss
    ) {

        reward =
            25 +
            wave;


        mageCoins +=
            2;


        messageText.textContent =
            "⚔️ MINI BOSS DEFEATED! +" +
            reward +
            " Gold and +2 Mage Coins!";

    }


    gold +=
        reward;


    removeEnemy(
        enemy,
        true
    );


    updateUI();

}


// =====================================
// REMOVE ENEMY
// =====================================

function removeEnemy(
    enemy,
    defeated
) {

    if (
        enemy.element
    ) {

        enemy.element.remove();

    }


    enemies =
        enemies.filter(

            function(item) {

                return (
                    item.id !==
                    enemy.id
                );

            }

        );


    enemiesAlive--;


    if (
        enemiesAlive <
        0
    ) {

        enemiesAlive =
            0;

    }


    checkWaveComplete();

}


// =====================================
// WAVE COMPLETE
// =====================================

function checkWaveComplete() {

    if (
        !battleActive ||
        castleHealth <= 0
    ) {

        return;

    }


    if (
        spawningFinished &&
        enemiesAlive === 0
    ) {

        battleActive =
            false;


        // FULL HEAL

        castleHealth =
            maxCastleHealth;


        // FULL MANA

        mana =
            maxMana;


        manaStatus.textContent =
            "🏰 Castle fully healed. ✨ Mana restored. Mage cooldowns are frozen until the next battle.";


        const completedWave =
            wave;


        const bonus =
            10 +
            wave *
            3;


        gold +=
            bonus;


        messageText.textContent =
            "🏆 Wave " +
            wave +
            " cleared! +" +
            bonus +
            " gold. Castle and mana restored!";


        // =====================================
        // ULTIMATE BUFF COUNTDOWN
        // =====================================

        if (
            ultimateBuffWavesRemaining > 0 &&
            completedWave >= ultimateBuffStartWave
        ) {

            ultimateBuffWavesRemaining--;

        }


        wave++;


        saveGame();


        updateUI();


        setTimeout(

            function() {

                if (
                    gameRunning
                ) {

                    prepareWave();

                }

            },

            1200

        );

    }

}


// =====================================
// CAN CAST
// =====================================

function canCast(
    unlocked,
    manaCost,
    cooldown
) {

    if (
        !unlocked
    ) {

        messageText.textContent =
            "🔒 Unlock this mage first.";

        return false;

    }


    if (
        !battleActive
    ) {

        messageText.textContent =
            "Answer the question and start the battle first.";

        return false;

    }


    if (
        gamePaused
    ) {

        messageText.textContent =
            "The game is paused.";

        return false;

    }


    if (
        cooldown >
        0
    ) {

        messageText.textContent =
            "That mage is still cooling down.";

        return false;

    }


    if (
        mana <
        manaCost
    ) {

        messageText.textContent =
            "Not enough mana!";

        return false;

    }


    return true;

}


// =====================================
// FIRE MAGE
// =====================================

fireMageButton.addEventListener(
    "click",
    castFire
);


function castFire() {

    if (
        !canCast(
            fireUnlocked,
            fireManaCost,
            fireCooldown
        )
    ) {

        return;

    }


    mana -=
        fireManaCost;


    fireCooldown =
        getFireCooldownMax();


    const damage =
        7 +
        fireLevel *
        5;


    enemies.forEach(

        function(enemy) {

            if (
                enemy.alive
            ) {

                damageEnemy(
                    enemy,
                    damage
                );

            }

        }

    );


    showSpell(
        "🔥",
        350
    );


    messageText.textContent =
        "🔥 Fire Wave! " +
        damage +
        " damage to every enemy.";


    updateUI();

}


// =====================================
// ICE MAGE
// =====================================

iceMageButton.addEventListener(
    "click",
    castIce
);


function castIce() {

    if (
        !canCast(
            iceUnlocked,
            iceManaCost,
            iceCooldown
        )
    ) {

        return;

    }


    mana -=
        iceManaCost;


    iceCooldown =
        getIceCooldownMax();


    const damage =
        5 +
        iceLevel *
        4;


    enemies.forEach(

        function(enemy) {

            if (
                enemy.alive
            ) {

                damageEnemy(
                    enemy,
                    damage
                );


                enemy.frozen =
                    3 +
                    iceLevel *
                    0.5;

            }

        }

    );


    showSpell(
        "❄️",
        390
    );


    messageText.textContent =
        "❄️ Ice Blast! " +
        damage +
        " damage and enemies slowed.";


    updateUI();

}


// =====================================
// STORM MAGE
// =====================================

stormMageButton.addEventListener(
    "click",
    castStorm
);


function castStorm() {

    if (
        !canCast(
            stormUnlocked,
            stormManaCost,
            stormCooldown
        )
    ) {

        return;

    }


    mana -=
        stormManaCost;


    stormCooldown =
        getStormCooldownMax();


    const damage =
        10 +
        stormLevel *
        6;


    const targets =
        enemies
        .filter(

            function(enemy) {

                return enemy.alive;

            }

        )
        .sort(

            function(a, b) {

                return (
                    a.x -
                    b.x
                );

            }

        )
        .slice(

            0,

            3 +
            stormLevel

        );


    targets.forEach(

        function(enemy) {

            damageEnemy(
                enemy,
                damage
            );

        }

    );


    showSpell(
        "⚡",
        280
    );


    messageText.textContent =
        "⚡ Lightning! " +
        damage +
        " damage to " +
        targets.length +
        " enemies.";


    updateUI();

}


// =====================================
// POISON MAGE
// =====================================

poisonMageButton.addEventListener(
    "click",
    castPoison
);


function castPoison() {

    if (
        !canCast(
            poisonUnlocked,
            poisonManaCost,
            poisonCooldown
        )
    ) {

        return;

    }


    mana -=
        poisonManaCost;


    poisonCooldown =
        getPoisonCooldownMax();


    // Previous poison damage was roughly:
    //
    // 1 + poisonLevel per second
    //
    // New poison is 50% slower BUT
    // never expires.

    const poisonDamagePerSecond =
        (
            1 +
            poisonLevel
        ) *
        0.5;


    enemies.forEach(

        function(enemy) {

            if (
                enemy.alive
            ) {

                enemy.poisoned =
                    true;


                enemy.poisonDamagePerSecond =
                    Math.max(

                        enemy.poisonDamagePerSecond,

                        poisonDamagePerSecond

                    );

            }

        }

    );


    showSpell(
        "☠️",
        330
    );


    messageText.textContent =
        "☠️ Permanent Poison! Poison continues until the enemy dies.";


    updateUI();

}


// =====================================
// ULTIMATE MAGE
// =====================================

ultimateMageButton.addEventListener(
    "click",
    castUltimate
);


function castUltimate() {

    if (
        !ultimateUnlocked
    ) {

        return;

    }


    if (
        !battleActive
    ) {

        messageText.textContent =
            "Start the battle before using the Ultimate Mage.";

        return;

    }


    if (
        gamePaused
    ) {

        messageText.textContent =
            "Resume the game first.";

        return;

    }


    if (
        ultimateCooldown >
        0
    ) {

        messageText.textContent =
            "🌟 Ultimate Mage is still recharging.";

        return;

    }


    // 3 MINUTE COOLDOWN

    ultimateCooldown =
        ultimateCooldownMax;


    // STOP MORE ENEMIES SPAWNING

    if (
        spawnTimer
    ) {

        clearInterval(
            spawnTimer
        );


        spawnTimer =
            null;

    }


    spawningFinished =
        true;


    enemiesSpawned =
        enemiesToSpawn;


    // =====================================
    // ARCHER BOOST
    // NEXT 3 WAVES
    // =====================================

    ultimateBuffWavesRemaining =
        3;


    ultimateBuffStartWave =
        wave +
        1;


    showSpell(
        "🌟",
        300
    );


    messageText.textContent =
        "🌟 ULTIMATE! Wave destroyed! Archer damage and speed doubled for the next 3 waves!";


    // Copy list first because killEnemy
    // removes enemies from the real array.

    const enemiesToDestroy =
        [
            ...enemies
        ];


    enemiesToDestroy.forEach(

        function(enemy) {

            if (
                enemy.alive
            ) {

                killEnemy(
                    enemy
                );

            }

        }

    );


    // If Ultimate was used before the
    // first enemy appeared, this still
    // completes the wave.

    checkWaveComplete();


    saveGame();

    updateUI();

}


// =====================================
// SPELL EFFECT
// =====================================

function showSpell(
    symbol,
    top
) {

    const spell =
        document.createElement(
            "div"
        );


    spell.className =
        "spellEffect";


    spell.textContent =
        symbol;


    spell.style.left =
        "52%";


    spell.style.top =
        top +
        "px";


    spellContainer.appendChild(
        spell
    );


    setTimeout(

        function() {

            spell.remove();

        },

        500

    );

}


// =====================================
// MANA / COOLDOWN / POISON TIMER
// =====================================

setInterval(

    function() {

        // Everything pauses between waves.

        if (
            !gameRunning ||
            gamePaused ||
            !battleActive
        ) {

            return;

        }


        // =====================================
        // MANA REGENERATION
        // =====================================

        if (
            mana <
            maxMana
        ) {

            mana +=
                manaRegenAmount;


            if (
                mana >
                maxMana
            ) {

                mana =
                    maxMana;

            }

        }


        // =====================================
        // COOLDOWNS
        // =====================================

        fireCooldown =
            reduceTimer(
                fireCooldown
            );


        iceCooldown =
            reduceTimer(
                iceCooldown
            );


        stormCooldown =
            reduceTimer(
                stormCooldown
            );


        poisonCooldown =
            reduceTimer(
                poisonCooldown
            );


        ultimateCooldown =
            reduceTimer(
                ultimateCooldown
            );


        // =====================================
        // ICE AND POISON
        // =====================================

        enemies.forEach(

            function(enemy) {

                if (
                    !enemy.alive
                ) {

                    return;

                }


                // ICE

                if (
                    enemy.frozen >
                    0
                ) {

                    enemy.frozen -=
                        0.1;


                    if (
                        enemy.frozen <
                        0
                    ) {

                        enemy.frozen =
                            0;

                    }

                }


                // PERMANENT POISON

                if (
                    enemy.poisoned
                ) {

                    damageEnemy(

                        enemy,

                        enemy.poisonDamagePerSecond *
                        0.1

                    );

                }

            }

        );


        updateUI();

    },

    100

);


// =====================================
// REDUCE TIMER
// =====================================

function reduceTimer(
    timer
) {

    if (
        timer <=
        0
    ) {

        return 0;

    }


    timer -=
        0.1;


    if (
        timer <
        0
    ) {

        timer =
            0;

    }


    return timer;

}


// =====================================
// ARROW DAMAGE UPGRADE
// =====================================

arrowUpgrade.addEventListener(
    "click",
    function() {

        if (
            !spendGold(
                arrowCost
            )
        ) {

            return;

        }


        arrowDamage +=
            3;


        arrowCost =
            Math.floor(
                arrowCost *
                1.5
            );


        messageText.textContent =
            "🏹 Arrow damage upgraded!";


        saveGame();

        updateUI();

    }
);


// =====================================
// CASTLE HEALTH UPGRADE
// =====================================

castleUpgrade.addEventListener(
    "click",
    function() {

        if (
            !spendGold(
                castleCost
            )
        ) {

            return;

        }


        maxCastleHealth +=
            25;


        castleHealth =
            maxCastleHealth;


        castleCost =
            Math.floor(
                castleCost *
                1.5
            );


        messageText.textContent =
            "🏰 Castle upgraded and fully healed!";


        saveGame();

        updateUI();

    }
);


// =====================================
// ARCHER SPEED UPGRADE
// =====================================

archerUpgrade.addEventListener(
    "click",
    function() {

        if (
            !spendGold(
                archerCost
            )
        ) {

            return;

        }


        archerLevel++;


        archerCost =
            Math.floor(
                archerCost *
                1.55
            );


        messageText.textContent =
            "🏹 Archers now fire faster!";


        saveGame();

        updateUI();

    }
);


// =====================================
// MANA UPGRADE
// =====================================

manaUpgrade.addEventListener(
    "click",
    function() {

        if (
            !spendGold(
                manaUpgradeCost
            )
        ) {

            return;

        }


        maxMana +=
            20;


        mana =
            maxMana;


        manaUpgradeCost =
            Math.floor(
                manaUpgradeCost *
                1.55
            );


        messageText.textContent =
            "✨ Maximum mana increased!";


        saveGame();

        updateUI();

    }
);


// =====================================
// FIRE MAGE UPGRADE
// =====================================

fireUpgrade.addEventListener(
    "click",
    function() {

        if (
            !spendMageCoins(
                fireUpgradeCost
            )
        ) {

            return;

        }


        fireLevel++;


        fireUpgradeCost++;


        messageText.textContent =
            "🔥 Fire Mage Level " +
            fireLevel +
            "! Damage increased and cooldown reduced.";


        saveGame();

        updateUI();

    }
);


// =====================================
// ICE MAGE
// =====================================

iceUpgrade.addEventListener(
    "click",
    function() {

        // UNLOCK

        if (
            !iceUnlocked
        ) {

            if (
                !spendMageCoins(
                    2
                )
            ) {

                return;

            }


            iceUnlocked =
                true;


            iceLevel =
                1;


            iceUpgradeCost =
                2;


            messageText.textContent =
                "❄️ Ice Mage unlocked!";

        }


        // UPGRADE

        else {

            if (
                !spendMageCoins(
                    iceUpgradeCost
                )
            ) {

                return;

            }


            iceLevel++;


            iceUpgradeCost++;


            messageText.textContent =
                "❄️ Ice Mage Level " +
                iceLevel +
                "! Damage increased and cooldown reduced.";

        }


        saveGame();

        updateUI();

    }
);


// =====================================
// STORM MAGE
// =====================================

stormUpgrade.addEventListener(
    "click",
    function() {

        // UNLOCK

        if (
            !stormUnlocked
        ) {

            if (
                !spendMageCoins(
                    4
                )
            ) {

                return;

            }


            stormUnlocked =
                true;


            stormLevel =
                1;


            stormUpgradeCost =
                3;


            messageText.textContent =
                "⚡ Storm Mage unlocked!";

        }


        // UPGRADE

        else {

            if (
                !spendMageCoins(
                    stormUpgradeCost
                )
            ) {

                return;

            }


            stormLevel++;


            stormUpgradeCost++;


            messageText.textContent =
                "⚡ Storm Mage Level " +
                stormLevel +
                "! Damage increased and cooldown reduced.";

        }


        saveGame();

        updateUI();

    }
);


// =====================================
// POISON MAGE
// =====================================

poisonUpgrade.addEventListener(
    "click",
    function() {

        // UNLOCK

        if (
            !poisonUnlocked
        ) {

            if (
                !spendMageCoins(
                    4
                )
            ) {

                return;

            }


            poisonUnlocked =
                true;


            poisonLevel =
                1;


            poisonUpgradeCost =
                3;


            messageText.textContent =
                "☠️ Poison Mage unlocked!";

        }


        // UPGRADE

        else {

            if (
                !spendMageCoins(
                    poisonUpgradeCost
                )
            ) {

                return;

            }


            poisonLevel++;


            poisonUpgradeCost++;


            messageText.textContent =
                "☠️ Poison Mage Level " +
                poisonLevel +
                "! Poison damage increased and cooldown reduced.";

        }


        saveGame();

        updateUI();

    }
);


// =====================================
// SECRET ULTIMATE MAGE
// =====================================

ultimateUnlockButton.addEventListener(
    "click",
    function() {

        if (
            ultimateUnlocked
        ) {

            return;

        }


        // Must have all four normal mages

        if (
            !fireUnlocked ||
            !iceUnlocked ||
            !stormUnlocked ||
            !poisonUnlocked
        ) {

            return;

        }


        // Cost 10 Mage Coins

        if (
            !spendMageCoins(
                10
            )
        ) {

            return;

        }


        ultimateUnlocked =
            true;


        messageText.textContent =
            "🌟 SECRET ULTIMATE MAGE UNLOCKED!";


        saveGame();

        updateUI();

    }
);


// =====================================
// SPEND GOLD
// =====================================

function spendGold(
    amount
) {

    if (
        gold <
        amount
    ) {

        messageText.textContent =
            "💰 Not enough Gold!";

        return false;

    }


    gold -=
        amount;


    return true;

}


// =====================================
// SPEND MAGE COINS
// =====================================

function spendMageCoins(
    amount
) {

    if (
        mageCoins <
        amount
    ) {

        messageText.textContent =
            "🪙 Not enough Mage Coins!";

        return false;

    }


    mageCoins -=
        amount;


    return true;

}


// =====================================
// PAUSE
// =====================================

pauseButton.addEventListener(
    "click",
    function() {

        if (
            !gameRunning
        ) {

            return;

        }


        gamePaused =
            !gamePaused;


        if (
            gamePaused
        ) {

            pauseButton.textContent =
                "▶️ RESUME";


            messageText.textContent =
                "⏸️ Game paused.";

        }

        else {

            pauseButton.textContent =
                "⏸️ PAUSE";


            messageText.textContent =
                "▶️ Game resumed.";

        }


        updateUI();

    }
);


// =====================================
// UPDATE UI
// =====================================

function updateUI() {

    // =====================================
    // CURRENCY
    // =====================================

    goldText.textContent =
        gold;


    goldStat.textContent =
        gold;


    mageCoinsText.textContent =
        mageCoins;


    mageCoinStat.textContent =
        mageCoins;


    // =====================================
    // WAVE
    // =====================================

    waveText.textContent =
        wave;


    // =====================================
    // CASTLE
    // =====================================

    castleStat.textContent =
        Math.ceil(
            castleHealth
        );


    castleHealthText.textContent =
        Math.ceil(
            castleHealth
        ) +
        " / " +
        maxCastleHealth;


    const castlePercent =
        (
            castleHealth /
            maxCastleHealth
        ) *
        100;


    castleHealthFill.style.width =
        castlePercent +
        "%";


    // =====================================
    // ARCHER
    // =====================================

    arrowDamageStat.textContent =
        getCurrentArrowDamage();


    arrowDamageValue.textContent =
        arrowDamage;


    archerLevelValue.textContent =
        archerLevel;


    castleHealthValue.textContent =
        maxCastleHealth;


    // =====================================
    // NORMAL SHOP COSTS
    // =====================================

    arrowCostText.textContent =
        arrowCost;


    castleCostText.textContent =
        castleCost;


    archerCostText.textContent =
        archerCost;


    manaUpgradeCostText.textContent =
        manaUpgradeCost;


    // =====================================
    // MANA
    // =====================================

    maxManaValue.textContent =
        maxMana;


    manaText.textContent =
        Math.floor(
            mana
        ) +
        " / " +
        maxMana +
        " MP";


    const manaPercent =
        (
            mana /
            maxMana
        ) *
        100;


    manaFill.style.width =
        manaPercent +
        "%";


    // =====================================
    // MAGE LEVELS
    // =====================================

    fireLevelText.textContent =
        fireLevel;


    iceLevelText.textContent =
        iceLevel;


    stormLevelText.textContent =
        stormLevel;


    poisonLevelText.textContent =
        poisonLevel;


    fireUpgradeCostText.textContent =
        fireUpgradeCost;


    // =====================================
    // ICE BUTTON
    // =====================================

    if (
        iceUnlocked
    ) {

        iceUpgrade.textContent =
            "Upgrade - " +
            iceUpgradeCost +
            " 🪙";

    }

    else {

        iceUpgrade.textContent =
            "Unlock - 2 🪙";

    }


    // =====================================
    // STORM BUTTON
    // =====================================

    if (
        stormUnlocked
    ) {

        stormUpgrade.textContent =
            "Upgrade - " +
            stormUpgradeCost +
            " 🪙";

    }

    else {

        stormUpgrade.textContent =
            "Unlock - 4 🪙";

    }


    // =====================================
    // POISON BUTTON
    // =====================================

    if (
        poisonUnlocked
    ) {

        poisonUpgrade.textContent =
            "Upgrade - " +
            poisonUpgradeCost +
            " 🪙";

    }

    else {

        poisonUpgrade.textContent =
            "Unlock - 4 🪙";

    }


    // =====================================
    // SECRET ULTIMATE REVEAL
    // =====================================

    const allNormalMagesUnlocked =
        fireUnlocked &&
        iceUnlocked &&
        stormUnlocked &&
        poisonUnlocked;


    if (
        allNormalMagesUnlocked
    ) {

        ultimateCard.style.display =
            "block";

    }

    else {

        ultimateCard.style.display =
            "none";

    }


    // =====================================
    // ULTIMATE STATUS
    // =====================================

    if (
        ultimateUnlocked
    ) {

        ultimateStatusText.textContent =
            "🌟 UNLOCKED";


        ultimateUnlockButton.style.display =
            "none";


        ultimateMageButton.style.display =
            "inline-block";

    }

    else {

        ultimateStatusText.textContent =
            "Cost: 10 Mage Coins";


        ultimateUnlockButton.style.display =
            "inline-block";


        ultimateMageButton.style.display =
            "none";

    }


    updateMageButtons();

}


// =====================================
// UPDATE MAGE BUTTONS
// =====================================

function updateMageButtons() {

    updateOneMage(

        fireMageButton,

        fireCooldownText,

        fireUnlocked,

        fireCooldown,

        fireManaCost

    );


    updateOneMage(

        iceMageButton,

        iceCooldownText,

        iceUnlocked,

        iceCooldown,

        iceManaCost

    );


    updateOneMage(

        stormMageButton,

        stormCooldownText,

        stormUnlocked,

        stormCooldown,

        stormManaCost

    );


    updateOneMage(

        poisonMageButton,

        poisonCooldownText,

        poisonUnlocked,

        poisonCooldown,

        poisonManaCost

    );


    // =====================================
    // ULTIMATE BUTTON
    // =====================================

    if (
        ultimateUnlocked
    ) {

        if (
            ultimateCooldown >
            0
        ) {

            ultimateCooldownText.textContent =
                Math.ceil(
                    ultimateCooldown
                );


        }

        else if (
            !battleActive
        ) {

            ultimateCooldownText.textContent =
                "WAIT";

        }

        else if (
            gamePaused
        ) {

            ultimateCooldownText.textContent =
                "⏸";

        }

        else {

            ultimateCooldownText.textContent =
                "";

        }

    }

}


// =====================================
// UPDATE ONE NORMAL MAGE
// =====================================

function updateOneMage(
    button,
    cooldownElement,
    unlocked,
    cooldown,
    manaCost
) {

    if (
        !unlocked
    ) {

        button.classList.add(
            "lockedMage"
        );


        cooldownElement.textContent =
            "🔒";


        return;

    }


    button.classList.remove(
        "lockedMage"
    );


    if (
        cooldown >
        0
    ) {

        cooldownElement.textContent =
            cooldown.toFixed(
                1
            );

    }


    else if (
        mana <
        manaCost
    ) {

        cooldownElement.textContent =
            "LOW MP";

    }


    else if (
        !battleActive
    ) {

        cooldownElement.textContent =
            "WAIT";

    }


    else if (
        gamePaused
    ) {

        cooldownElement.textContent =
            "⏸";

    }


    else {

        cooldownElement.textContent =
            "";

    }

}


// =====================================
// GAME OVER
// =====================================

function gameOver() {

    // DYING DELETES GAME PROGRESS

    localStorage.removeItem(
        "extremelyHardMathSave"
    );


    gameRunning =
        false;


    battleActive =
        false;


    if (
        spawnTimer
    ) {

        clearInterval(
            spawnTimer
        );


        spawnTimer =
            null;

    }


    finalWaveText.textContent =
        wave;


    gameOverPanel.style.display =
        "block";


    waveStartPanel.style.display =
        "none";


    messageText.textContent =
        "💀 Your castle has fallen.";

}


// =====================================
// RESTART
// =====================================

function restartGame() {

    gameRunning =
        false;


    battleActive =
        false;


    localStorage.removeItem(
        "extremelyHardMathSave"
    );


    location.reload();

}


resetGameButton.addEventListener(
    "click",
    restartGame
);


restartButton.addEventListener(
    "click",
    restartGame
);


// =====================================
// SAVE GAME
// =====================================

function saveGame() {

    const gameData = {

        // PROGRESS

        wave:
            wave,

        gold:
            gold,

        mageCoins:
            mageCoins,


        // CASTLE

        castleHealth:
            castleHealth,

        maxCastleHealth:
            maxCastleHealth,


        // ARCHERS

        arrowDamage:
            arrowDamage,

        archerLevel:
            archerLevel,


        // MANA

        mana:
            mana,

        maxMana:
            maxMana,


        // SHOP COSTS

        arrowCost:
            arrowCost,

        castleCost:
            castleCost,

        archerCost:
            archerCost,

        manaUpgradeCost:
            manaUpgradeCost,


        // MAGES

        fireUnlocked:
            fireUnlocked,

        fireLevel:
            fireLevel,

        iceUnlocked:
            iceUnlocked,

        iceLevel:
            iceLevel,

        stormUnlocked:
            stormUnlocked,

        stormLevel:
            stormLevel,

        poisonUnlocked:
            poisonUnlocked,

        poisonLevel:
            poisonLevel,


        // MAGE COSTS

        fireUpgradeCost:
            fireUpgradeCost,

        iceUpgradeCost:
            iceUpgradeCost,

        stormUpgradeCost:
            stormUpgradeCost,

        poisonUpgradeCost:
            poisonUpgradeCost,


        // COOLDOWNS

        fireCooldown:
            fireCooldown,

        iceCooldown:
            iceCooldown,

        stormCooldown:
            stormCooldown,

        poisonCooldown:
            poisonCooldown,


        // ULTIMATE

        ultimateUnlocked:
            ultimateUnlocked,

        ultimateCooldown:
            ultimateCooldown,

        ultimateBuffWavesRemaining:
            ultimateBuffWavesRemaining,

        ultimateBuffStartWave:
            ultimateBuffStartWave

    };


    localStorage.setItem(

        "extremelyHardMathSave",

        JSON.stringify(
            gameData
        )

    );

}


// =====================================
// LOAD GAME
// =====================================

function loadGame() {

    const savedGame =
        localStorage.getItem(
            "extremelyHardMathSave"
        );


    if (
        !savedGame
    ) {

        return;

    }


    const gameData =
        JSON.parse(
            savedGame
        );


    wave =
        gameData.wave ??
        wave;


    gold =
        gameData.gold ??
        gold;


    mageCoins =
        gameData.mageCoins ??
        mageCoins;


    castleHealth =
        gameData.castleHealth ??
        castleHealth;


    maxCastleHealth =
        gameData.maxCastleHealth ??
        maxCastleHealth;


    arrowDamage =
        gameData.arrowDamage ??
        arrowDamage;


    archerLevel =
        gameData.archerLevel ??
        archerLevel;


    mana =
        gameData.mana ??
        mana;


    maxMana =
        gameData.maxMana ??
        maxMana;


    arrowCost =
        gameData.arrowCost ??
        arrowCost;


    castleCost =
        gameData.castleCost ??
        castleCost;


    archerCost =
        gameData.archerCost ??
        archerCost;


    manaUpgradeCost =
        gameData.manaUpgradeCost ??
        manaUpgradeCost;


    fireUnlocked =
        gameData.fireUnlocked ??
        fireUnlocked;


    fireLevel =
        gameData.fireLevel ??
        fireLevel;


    iceUnlocked =
        gameData.iceUnlocked ??
        iceUnlocked;


    iceLevel =
        gameData.iceLevel ??
        iceLevel;


    stormUnlocked =
        gameData.stormUnlocked ??
        stormUnlocked;


    stormLevel =
        gameData.stormLevel ??
        stormLevel;


    poisonUnlocked =
        gameData.poisonUnlocked ??
        poisonUnlocked;


    poisonLevel =
        gameData.poisonLevel ??
        poisonLevel;


    fireUpgradeCost =
        gameData.fireUpgradeCost ??
        fireUpgradeCost;


    iceUpgradeCost =
        gameData.iceUpgradeCost ??
        iceUpgradeCost;


    stormUpgradeCost =
        gameData.stormUpgradeCost ??
        stormUpgradeCost;


    poisonUpgradeCost =
        gameData.poisonUpgradeCost ??
        poisonUpgradeCost;


    fireCooldown =
        gameData.fireCooldown ??
        fireCooldown;


    iceCooldown =
        gameData.iceCooldown ??
        iceCooldown;


    stormCooldown =
        gameData.stormCooldown ??
        stormCooldown;


    poisonCooldown =
        gameData.poisonCooldown ??
        poisonCooldown;


    ultimateUnlocked =
        gameData.ultimateUnlocked ??
        ultimateUnlocked;


    ultimateCooldown =
        gameData.ultimateCooldown ??
        ultimateCooldown;


    ultimateBuffWavesRemaining =
        gameData.ultimateBuffWavesRemaining ??
        ultimateBuffWavesRemaining;


    ultimateBuffStartWave =
        gameData.ultimateBuffStartWave ??
        ultimateBuffStartWave;

}


// =====================================
// SAVE WHEN REFRESHING / CLOSING
// =====================================

window.addEventListener(
    "beforeunload",
    function() {

        if (
            gameRunning
        ) {

            saveGame();

        }

    }
);


// =====================================
// START GAME
// =====================================

loadGame();

updateUI();

prepareWave();

moveEnemies();

archerLoop();