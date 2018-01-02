void main() {
	float e   = 2.71828182845904523536;
	vec2 diff = vec2(0.5, 0.5) - TexCoord;
	float diffLength = length(diff);
	float offsetFactor = cos(abs(diffLength) * 35.0) * pow(e, -(pow(abs(diffLength - timer * 0.015), 2.0) / 0.075));
	vec2 diffUnit = normalize(diff);
	vec2 newCoord = TexCoord + diffUnit * offsetFactor * 0.1;
	FragColor = texture(InputTexture, newCoord);
}