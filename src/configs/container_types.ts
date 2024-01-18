interface IContainerComponent<T> {
  name: string
  props: T
}

export interface IContainerConfig<T> {
  container_name: string
  components: IContainerComponent<T>[]
}
