<template>
  <Card data-testid="FontSize">
    <TextElement data-testid="fontWeightSample" :fontWeight="token.value">
      Typograpy weight
    </TextElement>
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
export default class FontSize extends Vue {
  @Prop({ required: true }) private token!: Token;
}
</script>
