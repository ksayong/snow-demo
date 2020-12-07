$(function () {
    $(document).snowfall({
        flakeCount: 80,
        // z-indexの値
        flakeIndex: "888",
        // 最小サイズ （数値）
        minSize: 1,
        // 最大サイズ（数値）
        maxSize: 4,
        // 最低速度（数値）
        minSpeed: 1,
        // 最高速度（数値）
        maxSpeed: 5,
        // 雪の形を丸にする（boolean）
        round: true,
        // 影をつける（boolean）
        shadow: false
    });
});
