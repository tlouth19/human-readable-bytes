# Human Readable Bytes
Convert bytes to a readable format (GB, MB, etc.)

## Usage

```jsx
import convertBytesToHumanReadable from 'human-readable-bytes'

convertBytesToHumanReadable(bytes, method, decimals, space)
```
## Options

| Param | Description | Valid Options|
| ------ | ---------------- | ------------------------------------- |
| `bytes`| The bytes to convert | String/Integer|          
| `method`| File size calculation type | 1000 or 1024|
| `decimals`| Decimals to add to the file size | Integer |
| `space`| Add a space between file size and text (40GB vs. 40 GB) | Boolean |
