<template>
  <Card data-testid="height">
    <Box :height="token.value" />
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
export default class Height extends Vue {
  @Prop({ required: true }) private token!: Token;
}
</script>
