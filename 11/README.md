# 11_library_2 / examples

各サンプルは p5.js + ml5.js のスタンドアロン sketch です。

## 実行方法

### 1) p5.js Web Editor (推奨)

https://editor.p5js.org を開き、以下のファイルをアップロード:

- `index.html`（ml5.js の `<script>` を含む）
- `sketch.js`
- 画像アセット（imageClassifier のみ `cat.jpg`）

「Play」ボタンで実行。

### 2) ローカル

Chrome や Safari では `file://` 直開きだと WebGL / getUserMedia が動かないので、簡易サーバ経由で開く:

```
cd examples/handPose
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開く。

## 4 つのサンプル

| フォルダ | 使用モデル | 説明 |
|---|---|---|
| `imageClassifier/` | MobileNet | 1 枚の画像を 1000 クラスから分類 |
| `handPose/` | MediaPipe HandLandmarker | カメラ映像から手の 21 点を検出 |
| `faceMesh/` | MediaPipe FaceMesh | カメラ映像から顔の 468 点を検出 |
| `objectDetection/` | COCO-SSD | カメラ映像から 80 種類の物体を検出 |

## 前提

- カメラを使う 3 つ (handPose / faceMesh / objectDetection) は起動時にブラウザの
  カメラ許可ダイアログが出るので許可する
- `objectDetection` はモデルが初回読み込みで数 MB あるので少し時間がかかる
- `imageClassifier` はデモ用の `cat.jpg` を別画像に差し替えてもよい

## API 対照 (ml5.js v1)

| タスク | 公式関数 |
|---|---|
| 画像分類 | `ml5.imageClassifier(model)` → `classifier.classify(img, cb)` |
| 手 | `ml5.handPose(options)` → `handPose.detectStart(video, cb)` |
| 顔 | `ml5.faceMesh(options)` → `faceMesh.detectStart(video, cb)` |
| 物体 | `ml5.objectDetection("cocossd")` → `detector.detectStart(video, cb)` |

注意: 物体検出は `objectDetector` ではなく **`objectDetection`** が正しい。
