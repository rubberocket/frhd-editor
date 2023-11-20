!(function () {
    "use strict";
    function e(e) {
        (this.drawAngle = 0), (this.colors = e), this.createVersion();
    }
    var r = GameInventoryManager.HeadClass,
        t = {},
        o = 0,
        i = 0,
        n = 2.2,
        a = 1,
        s = 115,
        u = 112,
        v = 0.17,
        l = (e.prototype = new r());
    (l.versionName = ""),
        (l.dirty = !0),
        (l.getVersions = function () {
            return t;
        }),
        (l.cache = function (e) {
            var r = t[this.versionName];
            r.dirty = !1;
            var n = e.scene,
                a = Math.max(n.camera.zoom, 1),
                l = s * a * v,
                c = u * a * v,
                f = r.canvas;
            (f.width = l), (f.height = c), (o = f.width / 2), (i = f.height / 2);
            var h = f.getContext("2d"),
                b = v * a;
            h.save(),
                h.scale(b, b),
                h.translate(0, 0),
                h.beginPath(),
                (h.strokeStyle = "rgba(0,0,0,0)"),
                (h.lineCap = "butt"),
                (h.lineJoin = "miter"),
                (h.miterLimit = 4),
                h.save(),
                (h.fillStyle = "#ffffff"),
                h.beginPath(),
                h.arc(42.4, 52.5, 30.3, 0, 6.283185307179586, !0),
                h.closePath(),
                h.fill(),
                h.stroke(),
                h.restore(),
                h.save(),
                (h.fillStyle = this.colors.back),
                h.beginPath(),
                h.moveTo(71.624, 44.496),
                h.bezierCurveTo(68.112, 31.647, 56.363, 22.2, 42.4, 22.2),
                h.bezierCurveTo(25.665999999999997, 22.2, 12.099999999999998, 35.765, 12.099999999999998, 52.5),
                h.bezierCurveTo(12.099999999999998, 55.771, 12.623999999999999, 58.916, 13.582999999999998, 61.867000000000004),
                h.lineTo(71.624, 44.496),
                h.closePath(),
                h.fill(),
                h.stroke(),
                h.restore(),
                this.colors.front &&
                    (h.save(),
                    h.beginPath(),
                    h.moveTo(76.917, 38.393),
                    h.bezierCurveTo(71.677, 25.617, 59.54900000000001, 16.371000000000002, 45.172, 15.309000000000001),
                    h.bezierCurveTo(47.57899999999999, 22.559, 50.918, 33.862, 52.501, 44.894999999999996),
                    h.bezierCurveTo(60.643, 42.731, 68.775, 40.566, 76.917, 38.393),
                    h.closePath(),
                    (h.fillStyle = this.colors.front),
                    h.fill(),
                    h.stroke(),
                    h.restore()),
                h.save(),
                h.beginPath(),
                h.moveTo(42.4, 22.2),
                h.bezierCurveTo(59.134, 22.2, 72.7, 35.765, 72.7, 52.5),
                h.bezierCurveTo(72.7, 69.235, 59.135, 82.8, 42.4, 82.8),
                h.bezierCurveTo(25.665, 82.8, 12.1, 69.234, 12.1, 52.5),
                h.bezierCurveTo(12.1, 35.766000000000005, 25.666, 22.2, 42.4, 22.2),
                h.moveTo(42.4, 15.2),
                h.bezierCurveTo(21.833, 15.2, 5.100000000000001, 31.932, 5.100000000000001, 52.5),
                h.bezierCurveTo(5.100000000000001, 73.068, 21.832, 89.8, 42.4, 89.8),
                h.bezierCurveTo(62.967999999999996, 89.8, 79.69999999999999, 73.068, 79.69999999999999, 52.5),
                h.bezierCurveTo(79.69999999999999, 31.932000000000002, 62.968, 15.2, 42.4, 15.2),
                h.lineTo(42.4, 15.2),
                h.closePath(),
                h.fill(),
                h.stroke(),
                h.restore(),
                h.save(),
                h.beginPath(),
                h.moveTo(16.3, 66.85),
                h.bezierCurveTo(41.8, 60.148999999999994, 67.2, 53.449999999999996, 92.601, 46.648999999999994),
                h.bezierCurveTo(96.201, 45.648999999999994, 99.8, 44.748999999999995, 103.5, 43.748999999999995),
                h.bezierCurveTo(111, 41.748999999999995, 107.8, 30.148999999999994, 100.3, 32.148999999999994),
                h.bezierCurveTo(74.901, 38.94899999999999, 49.400999999999996, 45.748999999999995, 24, 52.449),
                h.bezierCurveTo(20.4, 53.449, 16.8, 54.349, 13.101, 55.349),
                h.bezierCurveTo(5.7, 57.35, 8.9, 68.85, 16.3, 66.85),
                h.lineTo(16.3, 66.85),
                h.closePath(),
                h.fill(),
                h.stroke(),
                h.restore();
        }),
        (l.getCache = function (e) {
            return t[this.versionName].dirty && this.cache(e), t[this.versionName].canvas;
        }),
        (l.setDirty = function () {
            t[this.versionName].dirty = !0;
        }),
        (l.getBaseWidth = function () {
            return s;
        }),
        (l.getBaseHeight = function () {
            return u;
        }),
        (l.getDrawOffsetX = function () {
            return n;
        }),
        (l.getDrawOffsetY = function () {
            return a;
        }),
        (l.getScale = function () {
            return v;
        }),
        GameInventoryManager && GameInventoryManager.register("forwardcap", e),
        "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = e), (exports.ForwardCap = e));
})();
