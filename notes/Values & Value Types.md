# Values & Value Types

### 8 primitive value types

#### Boolean

|Value Type|Wrapper|Value Example|
|--|--|--|
|`boolean`|`Boolean`|`true` `false`|


|Operation|Operator|Short Circuit Operator|Compund Assign|
|--:|:--:|:--:|:--:|
|and|`&`|`&&`|`&=`|
|or|<code>&#124;</code>|<code>&#124;&#124;</code>|<code>&#124;=</code>|
|xor|`^`, `!=`||`^=`|
|equals|`==`|
|not|`!`||`^= true`|


#### Numbers
- Java has no *unsigned* value types
- `double` should be preferred

|Value Type|Wrapper|Range|Range Bin|
|--|--|--|--|
|`byte`|`Byte`|$-128 \ \dots \ 127$|$-2^7 \ \dots \ 2^7-1$|
|`short`|`Short`|$-32768 \ \dots \ 32767$|$-2^{15} \ \dots \ 2^{15}-1$|
|`int`|`Integer`|$-2147483648 \ \dots \ 2147483647$|$-2^{31} \ \dots \ 2^{31}-1$|
|`long`|`Long`|$\approx-9 \cdot 10^{18} \ \dots \ \approx 9 \cdot 10^{18}$|$-2^{63} \ \dots \ 2^{63}-1$|

|Value Type|Wrapper|Range|Literal example|
|--|--|--|--|
|`float`|`Float`|$\approx 1.4 \cdot 10^{-45} \ \dots \ \approx 3.4 \cdot 10^{38}$|`1.0F` `1F`|
|`double`|`Double`|$\approx 4.9 \cdot 10^{-324} \ \dots \ \approx 1.798 \cdot 10^{308}$|`1.0` `1D` `1.6e-19` `0x11p-3`|

##### Special numbers
- `+0.0` `-0.0`
-  `Infinity`, `-Infinity`, `Double.POSITIVE_INFINITY`, `Double.NEGATIVE_INFINITY`
- `NaN`, `Double.NaN`
- `BigDecimal`
- `BigEnteger`

#### Character

Character is half-Number-like value type

|Value Type|Wrapper|Range|Range Bin|
|--|--|--|--|
|`char`|`Character`|$0 \ \dots \ 65535$|$0 \ \dots \ 2^{16}-1$|


%%

||Value Type|Value Example|
|--|--|--|
|Booleans|`boolean`|`true`,`false`|
|Integers|`byte`|`42`, `-1`|
||`short`|`42`, `-1`|
||`int`|`42`, `-1`|
||`long`|`42L`, `-1L`|
|Floats|`float`| `1.0`, `1.0f`|
||`double`|`1.0D`|
|Characters|`char`| `'a'`|

- `boolean`
- numbers
	- `byte`, `short`, `int`, `long`
	- `float`, `double`
- `char`

##### 1 referential value types

- `null`, *reference*

##### Special value type 

- `void`


##### Notes
- Values can be assigned to a variables
- Values *can't be changed* (instead variables are assigned with new value)
- Values are copied when passing as a method argument
%%