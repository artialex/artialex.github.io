# Numbers
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

##### primitive conversion

Widening (Implicit, Upcasting)

![[Pasted image 20210924204707.png]]

Narrowing (Casting)

![[Pasted image 20210924205032.png]]