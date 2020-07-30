<template>
  <Card data-testid="border">
    <Box :border="token.value"></Box>
    <TextElement isAlternative="true">{{ token.value }}</TextElement>
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Token } from '../TokenDeclaration';
import Card from '@/ui/Card/Card.vue';
import Box from '@/ui/Box/Box.vue';
import TextElement from '@/ui/Text/Text.vue';

@Component({
  components: {
    Card,
    Box,
    TextElement,
  },
})
export default class Border extends Vue {
  @Prop({ required: true }) private token!: Token;
}
</script>
